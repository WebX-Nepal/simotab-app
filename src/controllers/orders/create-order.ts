import Stripe from "stripe";
import { v4 as uuidv4 } from "uuid";
import { Request, Response, NextFunction } from "express";
import env from "../../utils/validateenv";
import ErrorHandler from "../../utils/errorhandler";
import { OrderModel } from "../../models/order.model";
const stripe = new Stripe(env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-08-16",
});

export const placeOrderHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token, subTotal, cartitems, curentUser } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: subTotal * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      const newOrder = {
        name: curentUser.name,
        email: curentUser.email,
        userId: curentUser._id,
        orderItems: cartitems,
        orderAmount: subTotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country:token.card.address_country,
          pinCode:token.card.address_zip,          
        },
        transectionId:payment.source?.id
      }



      const order=await OrderModel.create(newOrder)
      res.status(200).json({
        success: true,
        message: "Payment Failed",
        order
      });
    } else {
      return next(new ErrorHandler("failed for payment", 404));
    }
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 400));
  }
};
