import React, {useEffect} from "react";

import styles from "./ContentPage.module.css";

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
      <h2>หน่วยเศรษฐกิจ</h2>
      <p>
        หน่วยเศรษฐกิจ หมายถึงคน กลุ่มคน
        องค์กรที่ดำเนินกิจกรรมทางเศรษฐกิจหรือกิจกรรมที่เกี่ยวข้องกับชีวิตประจำวันของเรา
        ซึ่งมีอยู่ 3 หน่วยคือ หน่วยครัวเรือน หน่วยธุรกิจ และรัฐบาล
        ‘หน่วยครัวเรือน’ หมายถึงคนตั้งแต่ 1 คนที่อยู่ในบ้านเดียวกัน
        ตัดสินใจที่จะใช้ทรัพยากรหรือเงินร่วมกัน
        เพื่อให้เกิดประโยชน์สูงสุดและความพึงพอใจสูงสุดกับคนในบ้านของตัวเอง
        ‘หน่วยธุรกิจ’ หมายถึงคนตั้งแต่ 1
        คนที่นำปัจจัยการผลิตหรือทรัพยากรมาผลิตเป็นสินค้าและบริการ
        เพื่อขายให้คนอื่น ไม่ว่าจะเป็นครัวเรือน รัฐบาล
        หรือภาคธุรกิจด้วยกันเองก็ได้
        เพื่อสร้างกำไรสูงสุดและตอบสนองต่อความต้องการของผู้คนในสังคม ‘รัฐบาล’
        หมายถึง หน่วยงานของรัฐที่ดำเนินกิจกรรมทางเศรษฐกิจเพื่อประชาชนเป็นหลัก
        ทั้ง 3 หน่วยมีความสัมพันธ์ร่วมกันอยู่ตลอดเวลา เป็นวงจรวนเวียนกันไปมา
      </p>
      <p>
        จริง ๆ แล้วเรื่องมันเป็นแบบนี้ เริ่มจากตัวเราก่อนแล้วกัน
        สมมติว่าตื่นมาตอนเช้า เรา (มนุษย์จากหน่วยครัวเรือนคนหนึ่ง)
        อยากกินขนมปังสักชิ้น จึงเดินไปซื้อขนมปังที่ร้านสะดวกซื้อ
        (ซึ่งเป็นภาคธุรกิจ) ตอนที่เราซื้อขนมปัง เราจ่ายเงินให้ร้านค้า
        ขณะที่ร้านค้าก็เอาขนมปังมาแลกกับเงินของเรา
        ตอนนั้นคือเส้นสองเส้นสีเขียวข้างบน ตรงนั้นคือ ‘ตลาดสินค้าและบริการ’
        ตอนเย็นหลังเลิกเรียน
        เราก็กลับมารับจ้างเป็นพนักงานร้านสะดวกซื้อร้านเดิมที่เราไปซื้อขนมปังนั่นแหละ
        (ตอนนี้เราจะกลายเป็นแรงงาน ซึ่งเป็นส่วนหนึ่งของปัจจัยการผลิตแล้ว
        ให้พูดภาษาวิชาการของตรงนี้ก็คือเราบริการปัจจัยการผลิต) พอเราทำงานเสร็จ
        ร้านค้าก็จะให้เงินเรามา เรียกว่าค่าจ้าง
        หรือผลตอบแทนของปัจจัยการผลิตกลับมาที่เรา (หรือหน่วยครัวเรือน)
        ทั้งหมดนี้คือเส้นสีแดงข้างล่าง หรือ’ตลาดปัจจัยการผลิต’ แล้วรัฐบาลล่ะ?
        รัฐบาลสามารถแปลงร่างเป็นทุกอย่างได้หมดเลย
        ตั้งแต่เป็นเจ้าของปัจจัยการผลิต (
        เป็นเจ้าของโรงไฟฟ้าจ่ายไฟเข้าบ้านเราและโรงงาน)
        เป็นผู้บริโภคเหมือนหน่วยครัวเรือน (เช่น
        ซื้อคอมพิวเตอร์จากบริษัทคอมพิวเตอร์) และเป็นหน่วยธุรกิจ (เช่น
        ให้บริการซ่อมถนนให้กับเรา) ด้วยความที่รัฐบาลเป็นทุกอย่างให้เธอแล้ว
        ทำให้มีเส้นเข้า-ออกรัฐบาลเต็มไปหมด เส้นพวกนั้นแบ่งได้เป็นสองกลุ่ม
        เริ่มจากเส้นที่ชี้เข้าไปในรัฐบาล
        คือเส้นที่หน่วยครัวเรือนและรัฐบาลชี้เข้าไปที่รัฐบาลก็คือทุกคนจ่ายภาษีให้กับรัฐบาล
        ส่วนเส้นที่ชี้ออกก็คือรัฐบาลเอาเงินที่เราจ่ายภาษีมาสร้างบริการอำนวยความสะดวกหรือแจกเงินให้กับทั้ง
        2 หน่วย แล้วรัฐบาลเอาพวกทรัพยากรที่ไหนมาอำนวยความสะดวกให้กับเรา? ตอบง่าย
        ๆ ก็คือรัฐบาลซื้อสินค้าและบริการจากหน่วยครัวเรือนและธุรกิจ
        เหมือนแค่เป็นตัวกลางเฉย ๆ เช่น รัฐบาลจะสร้างอาคารใหญ่แห่งหนึ่ง
        รัฐก็ใช้เงินภาษีของเราไปจ้างคนจากหน่วยครัวเรือนมาเป็นแรงงาน
        เราก็จะได้เงินคืนมา แล้วก็ซื้ออิฐ
        ซื้อปูนมาจากบริษัทรับเหมาก่อสร้างมาสร้างอาคาร
        หน่วยธุรกิจก็จะได้เงินจากรับบาลเหมือนกัน
        ทุกอย่างเป็นวงจรกันแบบนี้ไปเรื่อย ๆ
      </p>
      <h2>ระบบเศรษฐกิจ</h2>
      <p>
        เคยสงสัยไหมว่าทำไมเกิดสงครามเย็น?
        ทำไมอเมริกาบอกว่าระบบเศรษฐกิจของพวกเขาเสรีกว่าของจีน
        แล้วมั่นใจว่าระบบเศรษฐกิจของตัวเองดีที่สุดในโลก? ระบบเศรษฐกิจ หมายถึง
        ลักษณะการดำเนินกิจกรรมทางเศรษฐกิจของแต่ละพื้นที่
        ในแต่ละสังคมบนโลกใบนี้มีวิธีการดำเนินกิจกรรมทางเศรษฐกิจที่แตกต่างกันไปตามวัฒนธรรม
        ประเพณี ความเชื่อของผู้คน สภาพแวดล้อม ฯลฯ
        แต่ทุกพื้นมีเป้าหมายเดียวกันคือใช้ระบบใดก็ได้ให้ประชาชนของตัวเองกินดี
        อยู่ดี มีความสุข เกิดความเท่าเทียมในสังคม
        ระบบเศรษฐกิจทั่วโลกสามารถแบ่งออกได้เป็น 4 กลุ่มใหญ่ๆ ‘ระบบคอมมิวนิสต์’
        คือระบบที่รัฐบาลเป็นเจ้าของทรัพยากรและปัจจัยการผลิตทั้งหมด
        รัฐจึงเป็นผู้ที่จัดสรรทรัพยากรให้ทุกคน เป็นคนกำหนดว่าต้องผลิตอะไร ทำไม
        เพื่อใคร ทำให้กลไกราคาไม่มีบทบาทในการแก้ไขปัญหาเศรษฐกิจ
        ข้อดีคือระบบนี้ช่วยลดปัญหาความเหลื่อมล้ำทางเศรษฐกิจ
        เนื่องจากทุกคนผลิตตามที่รัฐบาลสั่ง เพื่อส่งเข้าระบบส่วนกลางของรัฐ
        หลังจากนั้นรัฐจะเป็นผู้พิจารณาเองว่าจะจัดสรรทรัพยากรให้กับประชาชนอย่างเท่าเทียมกัน
        เช่น เราถูกรัฐสั่งให้ปลูกข้าว เมื่อปลุกข้าวเสร็จแล้ว
        เราต้องส่งข้าวทั้งหมดที่เราปลูกให้กับรัฐบาล
        จากนั้นรัฐบาลจะเป็นคนแบ่งข้าวมาให้เราเองว่าเราสมควรได้รับข้าวในปริมาณเท่าไหร่ที่จะได้รับข้าวในปริมาณที่เท่าเทียมกับคนอื่น
        ทำให้ตรงนี้กลายเป็นข้อเสียของระบบคอมมิวนิสต์
        คือทุกคนไม่มีเสรีภาพเลือกได้ว่าอยากผลิตหรือบริโภคอะไรเลย
        ต้องรอคำสั่งหรือรอรัฐบาลมอบทุกอย่างให้
        พอไม่มีทรัพยากรก็ไปผลิตอะไรแข่งขันกับรัฐไม่ได้
        รัฐบาลไม่มีคู่แข่งก็ไม่จำเป็นต้องผลิตสินค้าดี ๆ ไปแข่งกับใคร
        ‘ระบบสังคมนิยม’ คล้ายกับระบบคอมมิวนิสต์
        แต่รัฐบาลจะควบคุมระบบเศรษฐกิจและกิจการที่มีความสำคัญกับระบบเศษฐกิจมาก ๆ
        เช่น เหมืองแร่ น้ำมัน น้ำประปา ไฟฟ้า สาธารณูปโภค
        พร้อมกับปล่อยให้เอกชนสามารถมีกรรมสิทธิ์ครอบครองทรัพย์สินอยู่บ้าง
        ทำให้มีข้อดี-ข้อเสียคล้ายกับระบบคอมมิวนิสต์ ‘ระบบทุนนิยม’
        ระบบที่ให้เสรีภาพกับภาคเอกชนในการผลิตอย่างเสรี
        โดยที่รัฐบาลจะไม่เข้ามาเกี่ยวข้องในกิจกรรมทางเศรษฐกิจ
        รัฐมีบทบาทเพียงออกกฎหมายควบคุม เพื่อรักษาความเรียบร้อยเท่านั้น
        ทำให้ราคาสินค้าเป็นไปตามกลไกราคาหรือตามะรรมชาติที่มันควรจะเป็น
        ข้อดีของระบบทุนนิยมคือเมื่อทุกคนอยากจะผลิตอะไรก็ได้
        ถ้ามีคนเลือกผลิตสินค้าเหมือนกัน
        ก็จะต้องมาแข่งกันว่าสินค้าของใครคุณภาพดีกว่า ราคาถูกกว่า
        เพราะผู้บริโภคจะเลือกซื้อสินค้าและบริการที่ดีที่สุด
        ทำให้สินค้าในตลาดมีคุณภาพดีและราคาถูก เช่น โรงหนัง A เปิดโรงหนังมากว่า
        10 ปีแล้ว อยู่ดี ๆ ก็มีโรงหนัง B มาเปิดแข่งขันในตลาด แล้วโรงหนัง B
        มีเบาะนุ่มกว่า แอร์เย็นสบายกว่า ป๊อปคอร์นและค่าตั๋วถูกกว่าโรงหนัง A
        ทุกคนก็จะมาดูหนังที่โรงหนัง B เจ้าของโรงหนัง A
        ก็ต้องไปคิดแล้วว่าจะทำยังไงให้คนกลับมาดูหนังกับเขา
        จะเปลี่ยนเบาะให้นอนได้ พ้อมกับออกโปรโมชันลดราคาค่าตั๋วทุกวันพุธดีไหม
        แต่ถ้าประเทศแบบระบบคอมมิวนิสต์หรือสังคมนิยม ทั้งประเทศมีแค่โรงหนัง A
        ของรัฐบาล ไม่มีการแข่งขันเลย เบาะเก่ายังไงก็เก่าต่อไป
        มีกลิ่นบุหรี่ก็ไม่ต้องแก้ไข เพราะสุดท้ายถ้าคนอยากดูหนัง
        สุดท้ายไม่มีทางเลือกก็ต้องเข้าโรงหนัง A อยู่ดี ทว่า
        ทุนนิยมก็มีข้อเสียของมันเหมือนกัน
        โดยเฉพาะเรื่องการกระจายรายได้ที่ไม่เท่าเทียม
        ลองคิดดูว่าเราเป็นพนักงานแคชเชียร์ในโรงหนังตัวเล็ก ๆ
        คนหนึ่งที่ทำงานรับเงินจากคนอื่นแทบตาย
        แต่เงินที่เรารับมาใส่มือก็เป็นเงินของเจ้าของกิจการหมด
        สุดท้ายเงินก้อนนั้นถูกจัดสรรมาเป็นเงินเดือนของเราแค่นิดเดียว
        ทำงานหนักก็ได้เงินเดือนเท่าเดิม
        แบบนี้ก็เหมือนความไม่เท่าเทียมรูปแบบหนึ่ง คอมมิวนิสต์ก็สุดโต่งแบบหนึ่ง
        ทุนนิยมก็สุดโต่งอีกแบบหนึ่ง
        จึงมีอีกหนึ่งระบบที่นำข้อดีของทั้งสองระบบมายำรวมกันในระบบเดียวก็คือ
        ‘ระบบเศรษฐกิจแบบผสม’
        ระบบเศรษฐกิจแบบผสมคือระบบที่อยู่กึ่งกลางระหว่างสังคมนิยมและทุนนิยม
        ทั้งรัฐบาลและเอกชนเข้ามามีบทบาทในการแก้ปัญหาเศรษฐกิจทั้งคู่
        เอกชนยังมีเสรีภาพในการดำเนินกิจกรรมทางเศรษฐกิจเหมือนเดิม
        มีด้านที่เหมือสังคมนิยมเพียงด้านเดียวคือรัฐบาลจะเข้ามาลงทุนในกิจการที่ลงทุนยาก
        ลงทุนแล้วไม่คุ้มค่า เสี่ยงกับการขาดทุน แต่ทุกคนจำเป็นต้องใช้ เช่น ไฟฟ้า
        น้ำประปา เป็นต้น สมมติเราให้เอกชนเข้ามาบริหารงาน
        ปล่อยให้ค่าไฟไปตามกลไกราคาตลาด
        เราอาจจะจ่ายค่าไฟแพงกว่าที่เราจ่ายอยู่ทุกวันนี้ไม่รู้กี่เท่า
        แต่ที่เราจ่ายค่าไฟราคาถูกทุกวันนี้เพราะรัฐบาลควบคุมราคาและการผลิตเอาไว้
        เป็นต้น ระบบผสมก็ไม่ได้มีแต่ข้อดี
        เพราะมันก็คือการนำข้อเสียของทั้งสองระบบมายำรวมกันเหมือกัน เช่น
        เกิดความเหลื่อมล้ำแบบทุนนิยม
        หรือรัฐบาลอาจจะเข้ามาแทรกแซงแบบสังคมนิยมก็ได้
      </p>
      <h2>กลไกราคา</h2>
      <p>
        ราคาสินค้าและปริมาณการผลิตสินค้าบนโลกบนโลกใบนี้ถูกกำหนดมาจากจุดที่
        ‘ราคา’ และ ‘ปริมาณ’
        นั้นอยู่ในจุดที่ผู้ซื้อต้องการซื้อและผู้ขายก็อยากจะขาย
        เราเรียกจุดนั้นว่า ‘จุดดุลยภาพ’ ‘อุปสงค์’
        หมายถึงความต้องการซื้อสินค้าและบริการในระดับราคาหนึ่ง
        อุปสงค์หรือความต้องการซื้อมีกฎง่าย ๆ อยู่ว่าถ้าราคาสินค้าสูงขึ้น
        อุปสงค์จะลดลง โดยราคาจะลดลงไปตามกลไกตลาดในที่สุด เช่น ตั๋วหนังราคา 120
        บาท มีผู้ชมที่พร้อมจ่ายราคาดังกล่าว 50 คน
        แต่ถ้าโรงหนังประกาศขึ้นราคาค่าตั๋วเป็น 180 บาท
        ทำให้ผู้ชมรู้สึกว่าราคาค่าตั๋วแพง อุปสงค์หรือความต้องการซื้อก็จะลดลง
        ทำให้มีผู้ชมพร้อมจ่ายค่าตั๋วเหลือเพียง 30 คน
        ถ้าจุดดุลยภาพหรือจุดที่ตั๋วจะไม่เหลือเลย คือจุดที่ราคา 140 บาท
        ผู้ประกอบการก็จะต้องลดค่าตั๋วหนังกลับมาอยู่ที่ 140 บาท
        เพื่อไม่ให้มีตั๋วเหลือขาย ในทางกลับกัน ถ้าราคาสินค้าต่ำลง
        อุปสงค์หรือความต้องการซื้อสินค้าจะมีเพิ่มมากขึ้น
        แล้วราคาจะกลับมาสูงขึ้นในที่สุด เช่น ตั๋วคอนเสิร์ตราคา 5,000 บาท
        มีผู้ชมที่พร้อมจ่ายราคาดังกล่าว 300 คน แต่ถ้า official
        ประกาศลดราคาค่าตั๋วเป็น 3,500 บาท ทำให้ผู้ชมรู้สึกว่าราคาค่าตั๋วแพง
        อุปสงค์หรือความต้องการซื้อก็จะลดลง
        ทำให้มีผู้ชมพร้อมจ่ายค่าตั๋วมากขึ้นเป็น 500 คน แต่ราคาดุลยภาพอยู่ที่
        4,200 บาท official ก็ต้องกลัมาขึ้นราคาค่าตั๋วให้อยู่ที่ 4,200 บาท
        เพื่อให้เกิดความสมดุลระหว่าจำนวนผู้ซื้อและจำนวนตั๋วที่ official
        มีและได้กำไรมากขึ้น เทคนิคง่าย ๆ คือจำไว้ว่าอุปสงค์มองในมุมมองของคนซื้อ
        ให้เราลองคิดดูว่าถ้าสินค้าาคาแพงไปเราจะซื้อไหม แล้วถ้าราคาสินค้าถูกลง
        เราจะอยากได้มันมากขึ้นหรือเปล่า ‘อุปทาน’ หมายถึง
        ปริมาณของสินค้าและบริการในระดับหนึ่ง อุปทานก็มีกฎอยู่ง่าย ๆ ว่าถ้า
        ถ้าราคาสินค้าต่ำลง อุปสงค์หรือความต้องการขายจะลดลง
        โดยราคาจะกลับมาสูงขึ้นในที่สุด เช่น นางสาวเอ ขายเสื้อผ้าออนไลน์ราคา 599
        บาท แต่ถ้านางสาวเอตัดสินใจลดราคาเสื้อผ้าเหลือ 399
        บาทก็จะมีความอยากขายลดลง เพราะจะได้กำไรลดลง
        แต่ถ้าราคาดุลยภาพที่จะทำให้ขายหมดหรือดุลยภาพอยู่ที่ 499 บาท
        นางสาวเออาจจะต้องขึ้นราคาให้เท่ากับจุดดุลยภาพ ในทางกลับกัน
        ถ้าราคาสินค้าสูงขึ้น อุปสงค์หรือความต้องการขายจะสูงขึ้น
        โดยสุดท้ายราคาจะลดลงในที่สุด เช่น เปรียบเทียบว่านายบีขายกางเกงยีนส์ราคา
        299 บาท จะได้กำไรน้อยกว่าการขายกางเกงยีนส์ราคา 599 บาท
        นายบีก็จะมีอุปทานหรือต้องการขายกางเกงยีนส์ราคา 599
        บาทในจำนวนที่มากกว่ากางเกงยีนส์ 299 บาท แต่ถ้าราคาดุลยภาพอยู่ที่ 499 บาท
        นายบีอาจจะต้องลดราคาสินค้าลง
        เพราะไม่อย่างนั้นนายบีก็จะขายกางเกงยีนส์ไม่หมด
        เทคนิคคืออุปทานจะมองในมุมของคนขาย ถ้าราคาของที่เราขายแพงขึ้น
        เราจะอยากขายมันมากขึ้นไหม ถ้าเราขายถูกเกินไป
        เรายังอยากจะขายสินค้าอยู่ไหม เราอยากขายของหมดไหม
        ถ้าอยากขายหมดในราคาที่ไม่ต่ำเกินไปให้ดูราคาดุลยภาพ
        แล้วปรับราคาเดิมให้เท่ากับดุลยภาพ...เท่านั้นเอง
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
