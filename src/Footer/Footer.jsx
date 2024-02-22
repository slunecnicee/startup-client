const Footer = () => {
  return (
    <footer className="w-full h-auto bg-neutral-300 ">
      <div className="flex  justify-around items-center p-2 border-b-2  md:hidden ">
        <figure>
          <img src="/gerogia_gerb.png" alt="Gerb_of_Georgia" />
        </figure>
        <figure>
          <img src="/startup_fondi.png" alt="Startup_Fondi" />
        </figure>
        <figure>
          <img src="/gita.png" alt="Gita_logo" />
        </figure>
      </div>

      <div
        className=" hidden md:flex flex-row gap-10  border-b-2 items-start  justify-around text-textColor md:items-center p-3 lg:p-5"
        area-aria-label="contact"
      >
        <div
          className="flex justify-center items-center lg:gap-3 gap-1 text-base  lg:text-xl"
          area-aria-label="phone"
        >
          <span area-aria-label="phone_icon">
            <img className="h-6 w-5" src="/tel.png" alt="phone_icon_red" />
          </span>
          <span aria-label="phone_number">+995 32 2 03 31 23</span>
        </div>
        <div
          aria-label="mail"
          className="flex justify-center items-center lg:gap-3 gap-1  text-base  lg:text-xl"
        >
          <span area-aria-label="mail_icon">
            <img className="h-5 w-6" src="/mail.png" alt="mail_icon_red" />
          </span>
          <span aria-label="mail_address">INFO@STARTUP.GOV.GE</span>
        </div>
        <div
          className="flex justify-center items-center lg:gap-3 gap-1  text-base  lg:text-xl"
          aria-label="address"
        >
          <span aria-label="address_icon">
            <img
              className="h-6 w-5"
              src="/address.png"
              alt="address_icon_red"
            />
          </span>
          <span aria-label="address">ვ. ბერიძის 6, თბილისი 0108</span>
        </div>
      </div>
      <div
        area-aria-label="patners"
        className="flex flex-col sm:flex-row justify-between sm:justify-around"
      >
        <div className="hidden md:flex flex-wrap justify-center items-center p-3 gap-10">
          <figure>
            <img src="/gerogia_gerb.png" alt="Gerb_of_Georgia" />
          </figure>
          <figure>
            <img src="/startup_fondi.png" alt="Startup_Fondi" />
          </figure>
          <figure>
            <img src="/gita.png" alt="Gita_logo" />
          </figure>
        </div>

        <div
          className=" md:hidden flex flex-col gap-2  items-start p-1   text-textColor sm:p-3 "
          area-aria-label="contact"
        >
          <div
            className="flex justify-center items-center lg:gap-3 gap-1 text-base  lg:text-xl"
            area-aria-label="phone"
          >
            <span area-aria-label="phone_icon">
              <img
                className="sm:h-6 sm:w-5 h-4 w-3"
                src="/tel.png"
                alt="phone_icon_red"
              />
            </span>
            <span aria-label="phone_number">+995 32 2 03 31 23</span>
          </div>
          <div
            aria-label="mail"
            className="flex justify-center items-center lg:gap-3 gap-1  text-base  lg:text-xl"
          >
            <span area-aria-label="mail_icon">
              <img
                className="sm:h-5 sm:w-6 h-3 w-4"
                src="/mail.png"
                alt="mail_icon_red"
              />
            </span>
            <span aria-label="mail_address">INFO@STARTUP.GOV.GE</span>
          </div>
          <div
            className="flex justify-center items-center lg:gap-3 gap-1  text-base  lg:text-xl"
            aria-label="address"
          >
            <span aria-label="address_icon">
              <img
                className="sm:h-6 sm:w-5 h-4 w-3"
                src="/address.png"
                alt="address_icon_red"
              />
            </span>
            <span aria-label="address">ვ. ბერიძის 6, თბილისი 0108</span>
          </div>
        </div>

        <div className="text-textColor gap-2 p-1 sm:p-5 flex flex-col sm:justify-center sm:items-center justify-start items-start">
          <h2 className="text-base sm:block hidden  lg:text-xl">
            სტარტაპ საქართველო
          </h2>
          <p className=" sm:block hidden text-sm  lg:text-base">
            ინოვაციური ბიზნეს ხელშეწყობის პროგრამა
          </p>
          <p className="text-sm  lg:text-base"> © 2024 STARTUP.GOV.GE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
