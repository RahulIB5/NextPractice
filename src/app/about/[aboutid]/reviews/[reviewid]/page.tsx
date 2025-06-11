import React from 'react'
import { redirect } from 'next/navigation';

function generateRandomNumber(count: number){
  return Math.floor(Math.random() * count);
  
}
async function ProductReview(
    { params }: { params: Promise<{ aboutid: string; reviewid: string }> }
) {
  const random = generateRandomNumber(2);
  if (random === 1) {
    throw new Error('Error occurred in review page');
  }
  const { aboutid, reviewid } = await params;
  if(parseInt(reviewid) > 1000) {
    redirect("/about");
  }
  return (
    <div>About id {aboutid} Review id {reviewid}</div>
  )
}

export default ProductReview