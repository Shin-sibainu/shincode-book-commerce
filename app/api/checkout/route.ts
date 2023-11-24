import Stripe from "stripe";
import { NextResponse } from "next/server";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
// console.log(stripe);

export async function POST(request: Request, response: Response) {
  const { title, price, bookId } = await request.json();

  try {
    // チェックアウトセッションの作成
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "jpy",
            product_data: {
              name: title,
            },
            unit_amount: price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:3000/book/${bookId}`,
      cancel_url: "http://localhost:3000",
      // success_url: `${request.headers.get("origin")}/?success=true`,
      // cancel_url: `${request.headers.get("origin")}/?canceled=true`,
    });
    return NextResponse.json({ checkout_url: session.url });
  } catch (err: any) {
    return NextResponse.json({ message: err.message });
  }
}
