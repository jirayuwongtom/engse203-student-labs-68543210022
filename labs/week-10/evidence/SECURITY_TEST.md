## ผลการทดสอบ SQL Injection

### 1 เงื่อนไขที่เป็นจริงเสมอ

* **ยิง** `GET http://localhost:3001/api/requests?status=x'%20OR%20'1'='1`
* **ผลที่ได้** `[]` (0 รายการ)
* **เพราะ** ใช้ parameterized query ค่าถูกตีความเป็นข้อความ ไม่ใช่คำสั่ง

### 2 พยายามลบตาราง
* **ยิง** `GET http://localhost:3001/api/requests?status='%3B%20DROP%20TABLE%20requests%3B%20--`
* **ผลที่ได้** `[]` (0 รายการ) และเมื่อทดสอบดึงข้อมูลอีกครั้ง ตาราง `requests` ยังทำงานได้ปกติ
* **เพราะ** คำสั่ง DROP ถูกมองว่าเป็นแค่ String ตัวอักษรตัวหนึ่งที่นำไปค้นหาในคอลัมน์ status

### 3 ต่อเงื่อนไขเพิ่ม
* **ยิง** `GET http://localhost:3001/api/requests?status=pending'%20OR%20status='completed`
* **ผลที่ได้** `[]` (0 รายการ)
* **เพราะ** ค่าทั้งหมดถูกครอบเป็น String เดียว ทำให้ระบบมองหา status ที่ชื่อว่า "pending' OR status='completed" ซึ่งไม่มีอยู่จริง