import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import Footer from "../../components/footer/Footer";
import { useEffect, useRef, useState } from "react";

function About() {
  const [displayText1, setDisplayText1] = useState("");
  const [displayText2, setDisplayText2] = useState("");
  const intervalsRef = useRef({ interval1: null, interval2: null });

  // متن‌ها با ویرایش دستی برای جلوگیری از خطاهای پنهان
  const paragraph1 =
    "توسعه اینترنت, روشهای خرید ما را به کلی دگرگون کرده است. منافع موجود در خرید اینترنتی هر روز، تعداد بیشتری از مردم را به تجربه آن و ایجاد تغییر در الگوهای متداول خرید ترغیب می کند. بعد از تجربه دیجی‌کالا، خرید اینترنتی بیشتر با سرعت زندگی مدرن همگام شد و توانست خود را با روحیات و نیازهای رو به رشد مشتریان هماهنگ کند. در حالیکه مشغله های روزانه فرصت لذت بردن از اوقات فراغت را کاهش داده است، صرف زمان های طولانی برای انجام سفرهای درون شهری و خرید نیازهای روزانه معنای خود را از دست می دهد. آنچه در فرصت اوقات فراغت برای افراد در اولویت قرار می گیرد، تفریح، آموزش، ورزش، لذت بردن از علایق شخصی و رفع خستگی‏‏های روزانه است. همه این عوامل افراد را مجاب به استفاده از روش های نوین مانند مراجعه به یک فروشگاه اینترنتی در کمترین زمان برای انجام فعالیت هایی وقت گیر گذشته می کند، تا قبل از دیجی‌استایل فرآیند استقبال مشتریان از دیجی کالا ثابت کرد این روش از زندگی مورد علاقه طیف عظیمی از افراد است";
  const paragraph2 = `
      راهکارهای متنوعی که دنیای مدرن برای رفع نیازهای روزمره از جمله انتخاب و خرید کالا به افراد پیشنهاد می دهد، باعث افزایش سرعت و دقت در انجام این امور می شود. با این شرایط تازه دیگر کمتر کسی کالایی را بدون تحقیق و بررسی خریداری می کند( سبکی که به جرات می توان گفت به وسیله دیجی‌کالا مرسوم شد ) . مشتریان پیش از خرید هریک از کالاهای مورد نیاز خود، با طیف وسیعی از انتخاب ها مواجه اند و در مقابل آن، به اطلاعات دقیق تری نیازمندند. دقت در ویژگی های هر کالا و دسترسی به اطلاعات صحیح نیاز اساسی مشتریان است. امروزه روش های نوین و هوشمندانه خرید، می تواند به خوبی پاسخگوی نیازهای مشتریان باشد و همین امر موجب شده روزانه افراد بیشتری به جمع استفاده کنندگان سرویس های اینترنتی بپیوندند .
  
  `;

  useEffect(() => {
    // پاراگراف اول
    const words1 = paragraph1
      .split(" ")
      .filter((word) => word.trim().length > 0); // فیلتر قوی‌تر

    let i1 = 0;

    intervalsRef.current.interval1 = setInterval(() => {
      if (i1 < words1.length) {
        setDisplayText1((prev) => {
          const newText = prev ? `${prev} ${words1[i1]}` : words1[i1];
          return newText.replace("undefined", ""); // حذف احتمالی undefined
        });
        i1++;
      } else {
        clearInterval(intervalsRef.current.interval1);

        // پاراگراف دوم
        const words2 = paragraph2
          .split(" ")
          .filter((word) => word.trim().length > 0);

        let i2 = 0;

        intervalsRef.current.interval2 = setInterval(() => {
          if (i2 < words2.length) {
            setDisplayText2((prev) => {
              const newText = prev ? `${prev} ${words2[i2]}` : words2[i2];
              return newText.replace("undefined", "");
            });
            i2++;
          } else {
            clearInterval(intervalsRef.current.interval2);
          }
        }, 50);
      }
    }, 50);

    return () => {
      clearInterval(intervalsRef.current.interval1);
      clearInterval(intervalsRef.current.interval2);
    };
  }, []);

  return (
    <>
      <Container fluid className="container-about">
        <Row
          className="px-5"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Col>
            <h4 className="py-4 lalezar">درباره سایت</h4>
            <span className="about-p">{displayText1}</span>
          </Col>
          <Col className="py-4">
            <h5 className="py-4 lalezar">چرا فروشگاه آنلاین؟</h5>
            <span className="about-p">{displayText2}</span>
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
}

export default About;
