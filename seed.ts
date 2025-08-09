import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main(){
  const user = await prisma.user.upsert({
    where: { email: 'demo@outgearhub.local' },
    update: {},
    create: { email:'demo@outgearhub.local', name:'Demo User', roles:['renter','owner','host'] }
  });
  const host = await prisma.host.create({ data: { name:'Canyon Gate Storage', city:'Queen Creek', state:'AZ', lat:33.2487, lon:-111.6343, gated:true } });
  const space = await prisma.space.create({ data: { hostId: host.id, title:'Covered 40ft bay w/ 20A power', type:'RV', maxLengthFt:40, priceMonthly:185, features:['Covered','20A','Gated'], images:[] } });
  await prisma.listing.create({ data: { spaceId: space.id } });
  const booking = await prisma.storageBooking.create({ data: { userId: user.id, spaceId: space.id, start: new Date('2025-09-01'), end: new Date('2026-08-31'), priceMonthly:185, status:'active' } });
  await prisma.vehicle.create({ data: { ownerId:user.id, title:'2019 Keystone Bullet 243BHS', kind:'RV Trailer', lengthFt:28, sleeps:8, hasTrailerIncluded:true, nightly:109, minNights:2, description:'Family bunkhouse trailer.', images:[], storedAtBookingId: booking.id } });
  console.log('Seeded.');
}
main().finally(()=>prisma.$disconnect());
