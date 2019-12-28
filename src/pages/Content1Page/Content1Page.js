import React, {useEffect} from "react";

import styles from "./Content1Page.module.css";

export default function ContentPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={styles.contentContainer}>
      <h1>สรุปเนื้อหา เศรษฐศาสตร์</h1>
      <h2>นิยาม</h2>
      <p>
        เศรษฐศาสตร์ หมายถึง
        วิชาที่ว่าด้วยการจัดสรรทรัพยากรที่มีอยู่อย่างจำกัดให้เกิดประสิทธิภาพสูงสุดและตอบสนองต่อความต้องการของมนุษย์ที่มีอยู่อย่างไม่จำกัด
        คำเหล่านี้คือนิยามตามตำราเรียนที่ทำหลายคนกลัวการเรียนเศรษฐศาสตร์ไปเลย
        แต่จริง ๆ แล้ว
        เศรษฐศาสตร์คือเรื่องที่อยู่ในชีวิตประจำวันของเราในทุกลมหายใจ
        ตั้งแต่ตื่นยันนอนหลับ เพียงแต่เราไม่รู้ตัวว่าเรื่องเหล่านี้แอบแฝงอยู่
        ‘ทรัพยากร’ ในทางเศรษฐกิจ หมายความถึงอะไรก็ได้ที่มนุษย์นำมาใช้ประโยชน์
        เพื่อตอบสนองความต้องการของมนุษย์เอง เช่น เวลา แรงงาน เงิน คอมพิวเตอร์
        หรือแม้แต่ต้นไม้เล็กๆหนึ่งต้น
        ถ้าเราสามารถนำมาตอบสนองความต้องการของเราได้...ก็นับว่าเป็นทรัพยากรแล้ว
        เช่น เรามีเงินอยู่ 300 บาทแล้วจะเลือกใช้เงินจำนวนนี้ให้เกิดประโยชน์
        เกิดความพึงพอใจกับตัวเราเองให้มากที่สุดได้อย่างไรบ้าง
        เราอาจจะนำเงินไปซื้อเสื้อผ้าหมดเลยทั้ง 300 บาท
        หรือแบ่งเงินไปซื้อหนังสือติวสอบ gat 200 บาท แล้วอีก 100
        บาทนำไปซื้อเสื้อผ้าก็ได้ แต่เราไม่สามารถซื้อของทั้งหมดรวมกัน 400 บาทได้
        เพราะเรามีเงินอยู่เพียง 300 บาท เพราะฉะนั้น
        เศรษฐศาสตร์กำลังจะสอนเราว่าทุกอย่างบนโลกนี้มีอยู่อย่างจำกัด
        แล้วเราจะทำอย่างไรให้สิ่งที่เรามีอยู่เกิดประโยชน์สูงที่สุดต่อเราเองและทุก
        ๆ คน
      </p>
      <h2>ประวัติความเป็นมา</h2>
      <p>
        เศรษฐศาสตร์นั้นมีมาตั้งแต่สมัยโบราณแล้ว
        เพราะสมัยโบราณก็มีการแลกเปลี่ยนสินค้า มีการใช้เงิน
        จนพัฒนามาเป็นระบบเศรษฐกิจ
        แต่ตอนนั้นยังไม่ได้มีใครเรียกสิ่งเหล่านี้ว่าเป็นทฤษฎีทางเศรษฐศาสตร์เท่านั้นเอง
        จนกระทั่งในคริสต์ศตวรรธที่ 18 มีผู้ชายคนหนึ่งชื่อว่า ‘อดัม สมิธ’
        เขียนหนังสือเล่มหนึ่งชื่อว่า
        การสอบสวนธรรมชาติและสาเหตุแห่งความมั่งคั่งของประชาชาติ (An Inquiry Into
        the Nature and Causes of the Wealth of Nations)
        หรือเด็กสายเศรษฐศาสตร์จะชอบเรียกกันสั้น ๆ ว่า “The Wealth of Nation
        (ความมั่งคั่งของประชาชาติ)” ชื่อยาวจนจำไม่ได้จริง ๆ
        หนังสือเล่มนี้ตีพิมพ์ครั้งแรกเมื่อ ค.ศ.1776 หรือเมื่อ 243 ปีที่แล้ว
        (ยุคสมัยสมเด็จพระเจ้าตากสินมหาราชของไทยอยู่เลย)
        เพื่ออธิบายว่าแต่ละประเทศมีอะไรที่แตกต่างกัน ทำไมบางประเทศร่ำรวยมั่งคั่ง
        ทำไมบางประเทศยากจน อะไรหรือใครที่ทำให้ประเทศพวกนั้นเป็นแบบนี้
        ทำไมเราต้องใช้เงินกันด้วย ทำไมรัฐถึงออกนโยบายแบบที่เราเห็นในข่าว
        เพื่อสนับสนุนแนวคิดว่าเราควรมีระบบเศรษฐกิจแบบเสรี
        หรือรัฐบาลควรปล่อยให้เอกชนมีอิสระในเรื่องเศรษฐกิจ
        ไม่ต้องเข้ามาควบคุมอะไรเยอะแยะ แล้วปล่อยให้ทุกอย่างเป็นไปตามธรรมชาติ
        ความพิเศษของหนังสือเล่มนี้คือมันเป็นตำราเศรษฐศาสตร์เล่มแรกของโลก
        ทำให้สมิธได้รับการยกย่องเป็นบิดาแห่งเศรษฐศาสตร์ ถัดมาในปีค.ศ.1890 หรือ
        130 ปีที่แล้ว อัลเฟรด มาร์แชล นักเศรษฐศาสตร์ชาวอังกฤษน่าจะกำลังดีใจ
        เพราะหนังสือ บัญญัติ 10 ประการทางเศรษฐศาสตร์ (Principles of Economics)
        ของเขาได้รับการตีพิมพ์เป็นครั้งแรก หลังจากใช้เวลาเขียนนานเป็นสิบปี
        Principle of economics พูดถึงเรื่องอุปสงค์-อุปทาน
        และพวกทฤษฎีที่เกี่ยวกับการผลิต
        ซึ่งต่อมาทำให้เขาได้รับการยกย่องว่าเป็นผู้บุกเบิกวิชาเศรษฐศาสตร์จุลภาค
        หลังจากนั้นในปีค.ศ.1954 หรือ 65 ปีที่แล้ว
        อยู่ในช่วงหลังจากสงครามโลกครั้งที่ 1 ที่เศรษฐกิจทั่วโลกย่ำแย่
        คนตกงานเยอะมาก รัฐบาลหลายประเทศพยายามจะแก้ปัญหาก็ทำไม่ได้ จอห์น
        เมย์นาร์ด เคนส์ เป็นนักเศรษฐศาสตร์และลูกชายของนักเศษฐศาสตร์ชาวอังกฤษ
        เขียนหนังสือชื่อว่า ทฤษฎีเกี่ยวกับการจ้างงาน ดอกเบี้ย และเงินตรา (The
        General Theory of Employment, Interest, and Money)
        ขึ้นมาเพื่อเสนอว่าการปล่อยให้ตลาดเสรีแบบที่อดัม สมิทบอก ทำให้คนตกงาน
        เศรษฐกิจย่ำแย่
        รัฐบาลก็ควรจะเข้ามาแทรกแซงเพื่อแก้ไขปัญหาด้วยการสร้างงานให้ประชาชน
        อย่างการทำงานให้รัฐ สร้างเขื่อน เป็นต้น
        ตอนนั้นภาคเอกชนก็กลัวว่าอ้าว...ถ้ารัฐบาลเข้ามากำหนดนั่น กำหนดนี่
        แล้วเราจะมีอิสระในการทำธุรกิจอยู่เหมือนเดิมไหม?
        เราก็จะเห็นได้เคนส์มองต่างจากอดัม สมิธ
        แต่ทั้งสองคนต่างก็มีเหตุผลเป็นของตัวเอง
        ทีนี้ปัญหาที่เคนส์ขึ้นมาแก้เป็นปัญหาสำคัญระดับชาติ
        ทำให้เคนส์ได้รับการยกย่องเป็นบิดาแห่งเศรษฐศาสตร์มหภาค
      </p>
      <h2>อ้างอิง</h2>
      <ul>
        <li>
          <a
            href="http://sagehouse.igetweb.com/articles/517671/%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%97%E0%B8%B5%E0%B9%881%E0%B9%80%E0%B8%A8%E0%B8%A3%E0%B8%A9%E0%B8%90%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%9A%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%95%E0%B9%89%E0%B8%99.html
"
          >
            แหล่งอ้างอิงที่ 1
          </a>
        </li>
        <li>
          <a
            href="https://my.dek-d.com/anything-blabla/writer/viewlongc.php?id=731085&chapter=3"
          >
            แหล่งอ้างอิงที่ 2
          </a>
        </li>
        <li>
          <a
            href="https://social.mwit.ac.th/files/58_2_doc_s30105_2.pdf"
          >
            แหล่งอ้างอิงที่ 3
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
}