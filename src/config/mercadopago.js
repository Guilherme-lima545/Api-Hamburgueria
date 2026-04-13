import {MercadoPagoConfig} from "mercadopago";

const cliente = new MercadoPagoConfig({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
  locale: "Pt-BR",
});


export default cliente;