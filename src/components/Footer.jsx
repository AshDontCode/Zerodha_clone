import React from "react";
import logo from "../assets/logo.svg";
import x from "../assets/x-twitter.svg";
import whatsapp from "../assets/whatsapp-logo.svg";
import youtube from "../assets/youtube.svg";

const Footer = () => {
  const footerNav = [
    "NSE",
    "BSE",
    "MCX",
    "Terms and Conditions",
    "Policies & Procedures",
    "Privacy Policy",
    "Disclosure",
    "For Investor's Attention",
    "Investor Charter",
  ];
  const company = [
    "About",
    "Products",
    "Pricing",
    "Referral Programme",
    "Careers",
    "Zerodha.tech",
    "Press & media",
    "Zerodha Cares (CSR)",
  ];
  const support = [
    "Contact us",
    "Support portal",
    "Z-Connect",
    "Blog",
    "List of charges",
    "Downloads & resources",
    "Videos",
    "Market overview",
    "How to file a complaint",
    "Status of your complaints",
  ];
  const account = ["Open an account", "Fund transfer"];

  const socialLinks = [x, whatsapp, youtube, x];

  return (
    <footer className="bg-[#fbfbfb] border-t ">
      <div className="flex flex-col justify-center items-center font-Inter p-5  w-3/4 container mx-auto">
      <div className="flex flex-col justify-around md:flex-row text-[#9b9b9b] w-full">
        <div className="">
          <div>
            <img src={logo} alt="Zerodha_Logo" width={200} className="py-4" />
          </div>
          <div className="min-w-sm max-w-40">© 2010 - 2024, Zerodha Broking Ltd. All rights reserved.</div>
          <div className="flex gap-5 my-4">
            {socialLinks.map((image) => {
              return <img src={image} width={20} alt=""/>
            })}
          </div>
          <hr />
          <div className="flex gap-5 my-4">
            {socialLinks.map((image) => {
              return <img src={image} width={20} alt=""/>
            })}
          </div>
        </div>
        <div className="">
          <h6 className="font-semibold text-[#424242] py-2 px-1 text-[20px]">Company</h6>
          {company.map((item) => {
            return (
              <div className="text-[#666] text-[18px] font-semibold p-1 hover:text-zerodhaBlueColor cursor-pointer">{item}</div>
            );
          })}
        </div>
        <div className="">
          <h6 className="font-semibold text-[#424242] py-2 px-1 text-[20px]">Support</h6>
          {support.map((item) => {
            return (
              <div className="text-[#666] text-[18px] font-semibold p-1 hover:text-zerodhaBlueColor cursor-pointer">{item}</div>
            );
          })}
        </div>
        <div className="">
          <h6 className="font-semibold text-[#424242] py-2 px-1 text-[20px]">Account</h6>
          {account.map((item) => {
            return (
              <div className="text-[#666] text-[18px] font-semibold p-1 hover:text-zerodhaBlueColor cursor-pointer">{item}</div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="text-[13px] text-[#9b9b9b]">
          <p className="p-5">
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to{" "}
            <span className="text-zerodhaBlueColor cursor-pointer">
              complaints@zerodha.com
            </span>
            , for DP related to{" "}
            <span className="text-zerodhaBlueColor cursor-pointer">
              dp@zerodha.com
            </span>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF{" "}
          </p>
          <p className="p-5">
            Procedure to file a complaint on{" "}
            <span className="text-zerodhaBlueColor cursor-pointer">
              SEBI SCORES:
            </span>{" "}
            Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>
          <p className="p-5 text-zerodhaBlueColor cursor-pointer inline-block">
            Smart Online Dispute Resolution | Grievances Redressal Mechanism{" "}
          </p>
          <p className="p-5">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p className="p-5">
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p className="p-5">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            <span className="text-zerodhaBlueColor cursor-pointer">
              create a ticket here
            </span>
            .
          </p>
        </div>

        <div className="flex flex-row  p-5 flex-wrap md:justify-center md:items-center">
          {footerNav.map((link) => {
            return (
              <div className="text-[#9b9b9b] font-semibold px-2 py-1 text-[13px] ">
                {link}
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
