import { NextResponse } from 'next/server';
export async function GET(){
  const data = [
    { id:'s1', title:'Covered 40ft bay w/ 20A power', type:'RV', priceMonthly:185, host:{ city:'Queen Creek', state:'AZ', lat:33.2487, lon:-111.6343 } },
    { id:'s2', title:'Open gravel lot (Boat/Trailer OK)', type:'Boat', priceMonthly:95, host:{ city:'Mesa', state:'AZ', lat:33.4152, lon:-111.8315 } },
    { id:'s3', title:'Indoor bay (UTV/JetSki)', type:'OHV', priceMonthly:225, host:{ city:'Chandler', state:'AZ', lat:33.3062, lon:-111.8413 } },
  ];
  return NextResponse.json(data);
}
