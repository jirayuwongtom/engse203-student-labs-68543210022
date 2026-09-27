## ผลการทดสอบ Constraint

### 1. FOREIGN KEY

**คำสั่งที่ลอง**
```sql
INSERT INTO requests (id, requester_id, request_type, location, details)
VALUES ('REQ-TEST' , 99999 , 'แจ้งซ่อม' , 'ห้องทดสอบ' , 'ทดสอบระบบ');
```
**ผลที่ได้** `UNIQUE constraint failed: requests.id`<br>
ถูกปฏิเสธเนื่องจากไม่มีผู้ใช้ ID 99999 อยู่จริงในตาราง users

### 2. CHECK

**คำสั่งที่ลอง**
```sql
UPDATE requests SET status = 'ยกเลิก' WHERE id = 'REQ-001';
```
**ผลที่ได้** `CHECK constraint failed: status IN ('pending','in-progress','completed')`<br>
ถูกปฏิเสธเนื่องจากค่า ยกเลิก ไม่อยู่ในค่าที่ CHECK กำหนดไว้

### 3. UNIQUE (ใส่อีเมลซ้ำ)

**คำสั่งที่ลอง**
```sql
INSERT INTO users (name , department , email) 
VALUES ('สมชาย ใจดี' , 'วิศวกรรมซอฟต์แวร์' , 'somchai@rmutl.ac.th');
```
**ผลที่ได้** `UNIQUE constraint failed: users.email `<br>
ถูกปฏิเสธเนื่องจากอีเมลนี้มีอยู่ในตาราง users แล้ว จึงไม่สามารถเพิ่มอีเมลซ้ำได้

### 4. UNIQUE (ใส่ ID คำร้องซ้ำ)

**คำสั่งที่ลอง**
```sql
INSERT INTO requests (id , requester_id , request_type , location , details) 
VALUES ('REQ-004' , 1 , 'แจ้งซ่อม' , 'ห้องปฏิบัติการคอมพิวเตอร์' , 'เครื่องคอมพิวเตอร์เปิดไม่ติด');
```

**ผลที่ได้** `UNIQUE constraint failed: requests.id`<br>
ถูกปฏิเสธเนื่องจาก REQ-004 มีอยู่ในตาราง requests แล้ว จึงไม่สามารถใช้ ID ซ้ำกันได้

### 5. NOT NULL

**คำสั่งที่ลอง**

```sql
INSERT INTO requests (id , requester_id , request_type,details) 
VALUES ('REQ-999' , 1 , 'แจ้งซ่อม' , 'เครื่องคอมพิวเตอร์เปิดไม่ติด');
```

**ผลที่ได้** `NOT NULL constraint failed: requests.location`<br>
ถูกปฏิเสธเนื่องจากไม่ได้ระบุค่า location ซึ่งกำหนด NOT NULL ไว้