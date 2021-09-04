import React from "react";
import Fade from "react-reveal/Fade";

import { InputText, InputFile } from "../../elements/Form";

import logoBca from "../../assets/images/logo_bca.jpg";
import logoMandiri from "../../assets/images/logo_mandiri.jpg";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;

  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = ((subTotal * tax) / 100) * subTotal;

  return (
    <Fade>
      <div className="container my-20 px-8 lg:px-36 md:px-32">
        <div className="grid grid-cols-12 grid-rows-1 my-5 text-gray-900">
          <div className="card col-start-1 col-end-6 ">
            <Fade delay={300}>
              <div className=" ml-1">
                <p className="mb-5">Transfer Pembayaran</p>
                <p>
                  Tax: <span className="font-medium">{tax}%</span>
                </p>
                <p className="my-2">
                  Sub Total: <span className="font-medium">{subTotal} USD</span>
                </p>
                <p className="mb-5">
                  Total: <span className="font-medium">${grandTotal} USD</span>
                </p>
              </div>
              <div className="flex mb-5">
                <div className="mr-4">
                  <img src={logoBca} alt="bank central asia" className="w-16 mr-0" />
                </div>
                <div>
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>2208 1996</dd>
                    <dd>BuildWith Angga</dd>
                  </dl>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <img src={logoMandiri} alt="bank mandiri" className="w-16 m-0" />
                </div>
                <div className="col-start-2">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>2208 1996</dd>
                    <dd>BuildWith Angga</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-start-7 col-end-7 border-l-2"></div>
          <Fade delay={600}>
            <div className="col-start-8 col-end-13">
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile accept="image/*" id="proofPayment" name="proofPayment" value={data.proofPayment} onChange={props.onChange} />
              <label htmlFor="bankName">Asal Bank</label>
              <InputText type="text" id="bankName" name="bankName" value={data.bankName} onChange={props.onChange} />
              <label htmlFor="bankHolder">Nama Pengirim</label>
              <InputText type="text" id="bankHolder" name="bankHolder" value={data.bankHolder} onChange={props.onChange} />
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
}
