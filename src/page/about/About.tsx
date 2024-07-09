import React from 'react';
const AboutUs: React.FC = () => {
  return (

    <div className="container mx-auto p-20 ">
      <h1 className="text-4xl font-bold mb-4 text-right">درباره ما</h1>
      <div className="flex flex-col items-center">
        <div className="w-full p-4">
          <img
            src="https://psdfa.com/wp-content/uploads/2023/06/shutterstock_275789651.jpg"
            alt="About Us"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
        <div className="w-full p-4">
          <p className="text-lg mb-4 text-right">
            ما یک شرکت پیشرو در ارائه راهکارهای نوین فناوری اطلاعات هستیم. هدف ما ارائه بهترین خدمات و محصولات به مشتریانمان است. تیم ما متشکل از کارشناسان حرفه‌ای و با تجربه در زمینه‌های مختلف فناوری اطلاعات است.
          </p>
          <p className="text-lg mb-4 text-right">
            ماموریت ما ایجاد ارزش افزوده برای مشتریانمان از طریق نوآوری، کیفیت و ارائه راهکارهای سفارشی شده است. ما به دنبال برقراری ارتباطی موثر و پایدار با مشتریانمان هستیم.
          </p>
          <p className="text-lg text-right">
            با ما همراه باشید و از خدمات و محصولات ما بهره‌مند شوید. ما همیشه آماده ارائه بهترین خدمات به شما هستیم.
          </p>
        </div>
      </div>
    </div>

  );
};

export default AboutUs;
