# API_TEST — LAB 07

**ชื่อ–รหัส:** นาย จิรายุ วงศ์ต่อม 68543210022-8 **วันที่ทดสอบ:** 19 กันยายน 2569

> บันทึก **ผลจริง** ที่เห็น ไม่ใช่ผลที่ควรได้ · ถ้าไม่ผ่านให้เขียนว่าไม่ผ่าน

## 1. ผลการทดสอบ API ด้วย Automated Test (`npm test`)

| # | สิ่งที่ทดสอบ | Method | Path | status ที่ควรได้ | status ที่ได้จริง | ผ่าน |
|---|---|---|---|---|---|---|
| 1 | คืนรายการทั้งหมดและเช็คว่าเป็น array | GET | `/api/requests` | 200 | 200 OK | ✅ |
| 2 | กรณีพบข้อมูลคำร้อง | GET | `/api/requests/REQ-001` | 200 | 200 OK | ✅ |
| 3 | กรณีไม่พบข้อมูลคำร้อง | GET | `/api/requests/REQ-999` | 404 | 404 Not Found | ✅ |
| 4 | ข้อมูลถูกต้อง และ status ตั้งเป็น pending | POST | `/api/requests` | 201 | 201 Created | ✅ |
| 5 | ข้อมูลไม่ครบ (เช่น requesterName ว่าง) | POST | `/api/requests` | 400 | 400 Bad Request | ✅ |
| 6 | CORS header ตอบ origin ที่อนุญาต | GET | `/api/requests` | อนุญาต `localhost:5173` | ตอบกลับ `localhost:5173` | ✅

## 2. Terminal Log ผลการรัน `npm test` (CP16)

```text
> engse203-week06-campus-api@2.0.0 test
> node --test "tests/*.test.js"

GET /api/requests 200 2.282 ms - 1030
▶ API test
  ▶ GET /api/requests
    ✔ คืนรายการทั้งหมด พร้อม status 200 (18.306604ms)
  ✔ GET /api/requests (18.856036ms)
GET /api/requests/REQ-001 200 0.960 ms - 321
  ▶ GET /api/requests/:id
    ✔ กรณีพบข้อมูลคำร้อง พร้อม status 200 (6.952941ms)
GET /api/requests/REQ-999 404 0.391 ms - 65
    ✔ กรณีไม่พบข้อมูลคำร้อง พร้อม status 404 (6.776574ms)
  ✔ GET /api/requests/:id (14.018078ms)
POST /api/requests 201 9.905 ms - 258
  ▶ POST /api/requests
    ✔ ข้อมูลถูกต้อง พร้อม status 201 และ status เป็น pending (14.516401ms)
POST /api/requests 400 0.893 ms - 198
    ✔ ข้อมูลไม่ครบ พร้อม status 400 (4.358593ms)
  ✔ POST /api/requests (19.296427ms)
GET /api/requests 200 0.332 ms - 1289
  ▶ CORS
    ✔ CORS header ตอบ origin ที่อนุญาต (3.594146ms)
  ✔ CORS (3.91075ms)
✔ API test (61.968467ms)
ℹ tests 6
ℹ suites 5
ℹ pass 6
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 347.927548
```

## Screenshot ที่แนบ

- [x] [images/network-cors-ok.png](../evidence/images/network-cors-ok.png)
- [x] [images/app-with-api.png](../evidence/images/app-with-api.png)
- [x] [images/error-state.png](../evidence/images/error-state.png)
