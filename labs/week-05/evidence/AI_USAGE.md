# ENGSE203 LAB05 — AI / Resource Usage

| Tool / Resource | Purpose | Used portion | How I verified | My final decision |
|---|---|---|---|---|
| Gemini | สอบถามการเขียนโค้ด (เช่น Cleanup guard, การเพิ่ม `onRecovery`), ปรึกษาเรื่องการแก้บั๊ก (id = `REQ-time-{random}`), และตรวจสอบความคืบหน้า/ผลลัพธ์ของ Test Case | แนวทางโค้ดป้องกัน Stale update, การแก้ Syntax ใน Template Literal ของรหัสคำร้องให้ถูกต้อง, การเพิ่มพารามิเตอร์ `onRecovery`,  | source review / runtime test | นำแนวทางและโค้ดที่แก้ไขไปปรับใช้จริงกับหน้าเว็บ ตรวจสอบผลลัพธ์ว่าบั๊กหายไป และทำตามขั้นตอนการบันทึกหลักฐานเพื่อส่งงาน |
| คู่มือ LAB05 | ใช้อ้างอิง Checkpoint, ตรวจสอบความถูกต้องของโค้ด | รายการ 10 ภาพบังคับ, ขั้นตอนการจำลองข้อผิดพลาด และชุดคำสั่งสำหรับ Build/Deploy บน GitHub Pages  | runtime test | ปฏิบัติตามขั้นตอนในคู่มือเพื่อตรวจสอบผลลัพธ์การทำงานของระบบและ บันทึกผล |

คำรับรอง:

- [x] ไม่ส่ง token, password, secret หรือข้อมูลส่วนบุคคลจริงให้เครื่องมือ
- [x] ตรวจ source และรัน test ด้วยตนเอง
- [x] อธิบาย Route, Effect, Service Layer และ persistence ของ final code ได้