# ENGSE203 LAB05 — Student Test Report

**ชื่อ–รหัส:** จิรายุ วงศ์ต่อม - 68543210022-8  
**OS / Browser / Node:** [Windows 11 [WSL] / Chrome / v22.23.1]  
**Branch / Commit:** `lab/week-05` / TODO

กรอก Actual result จากการรันจริง ใช้ `PASS`, `FAIL` หรือ `NOT RUN` และอ้างหลักฐานแบบ relative path

| Test ID | Preconditions / procedure summary | Actual result | Status | Evidence / Notes |
|---|---|---|---|---|
| TC-L5-01 | เปิด `#/` | หน้า Dashboard โหลดสำเร็จ แสดงแผงสรุปตัวเลขสถานะและรายการคำร้องครบถ้วน | PASS | [images/dashboard-initial.png](../evidence/images/dashboard-initial.png) |
| TC-L5-02 | ใช้ navigation 3 รายการ | หน้าจอเปลี่ยนไปตามเมนูที่กดโดยหน้าเว็บไม่กะพริบและเมนูที่กดมีไฮไลต์ถูกต้อง | PASS | [images/navigation-spa.png](../evidence/images/navigation-spa.png) |
| TC-L5-03 | เปิด/refresh `#/requests/new` | เมื่อกด refresh หน้าเว็บยังคงอยู่ที่หน้าสร้างคำร้องใหม่ (New Request) ไม่เปลี่ยนไปหน้า 404 | PASS | [images/refresh-new-request.png](../evidence/images/refresh-new-request.png) |
| TC-L5-04 | เปิด `#/requests/REQ-001` | หน้าจอแสดงรายละเอียดของคำร้องตรงกับรหัส REQ-001 (เช่น ชื่อผู้แจ้ง, ประเภท, สถานที่) ถูกต้องครบถ้วน | PASS | [images/route-detail-found.png](../evidence/images/route-detail-found.png) |
| TC-L5-05 | เปิด `#/requests/REQ-999` | หน้าจอแสดงข้อความว่า "ไม่พบคำร้องรหัส REQ-999" และมีลิงก์ให้กลับไปดูรายการทั้งหมด โดยยังคงโครงสร้างของหน้ารายละเอียดไว้ | PASS | [images/route-detail-not-found.png](../evidence/images/route-detail-not-found.png) |
| TC-L5-06 | เปิด `#/unknown` | หน้าจอแสดง 404 ไม่พบหน้าที่ต้องการ โดยยังมีแถบเมนูด้านบนและล่าง พร้อมลิงก์ให้กดกลับไปหน้า Dashboard | PASS | [images/route-not-found.png](../evidence/images/route-not-found.png) |
| TC-L5-07 | ลบ LAB05 key แล้วเปิด Dashboard | ข้อมูลคำร้องตัวอย่าง 3 รายการแสดงขึ้นมา และใน Local Storage มีคีย์พร้อม Envelope ถูกสร้างใหม่ โดยหน้าเว็บไม่มีแถบแจ้งเตือนสีเขียว | PASS | [images/storage-initial-load.png](../evidence/images/storage-initial-load.png) |
| TC-L5-08 | สังเกตช่วง latency | เห็นไอคอนวงกลมหมุนพร้อมข้อความ "กำลังโหลดข้อมูล…" ขึ้นมา ก่อนที่รายการคำร้องจะแสดง | PASS | [images/state-loading.png](../evidence/images/state-loading.png) |
| TC-L5-09 | เปิด `#/?scenario=error` | หน้าจอแสดงแถบสีเหลืองแจ้งโหมดทดสอบ และข้อความแจ้งเตือนโหลดข้อมูลไม่สำเร็จพร้อมปุ่มลองอีกครั้ง | PASS | [images/state-error-retry.png](../evidence/images/state-error-retry.png) |
| TC-L5-10 | กด Retry | เมื่อกดปุ่มลองอีกครั้ง URL เปลี่ยนกลับเป็น #/ และโหลดข้อมูลรายการคำร้องกลับมาแสดงได้ตามปกติ | PASS | [images/state-retry-success.png](../evidence/images/state-retry-success.png) |
| TC-L5-11 | เปิด `#/?scenario=empty` | แสดงหน้าจอแจ้งว่า "ยังไม่มีคำร้อง" พร้อมปุ่มลิงก์ไปหน้าสร้างคำร้องใหม่ | PASS | [images/state-empty.png](../evidence/images/state-empty.png) |
| TC-L5-12 | รัน public checker | รันคำสั่ง npm run check ผ่าน 133/133 รายการ | PASS | ผ่าน 133/133 รายการ  |
| TC-L5-13 | submit form ผิด validation | ปรากฏข้อความแจ้งเตือนสีแดงใต้ช่องที่กรอกไม่ครบหรือผิดเงื่อนไข โดยไม่มี Error ทางเทคนิคโผล่ขึ้นมาบนหน้าเว็บ | PASS | [images/request-form-invalid.png](../evidence/images/request-form-invalid.png) |
| TC-L5-14 | เพิ่ม valid request แล้ว refresh | ระบบนำทางไปหน้ารายละเอียดที่เพิ่งสร้างโดยแสดงข้อมูลถูกต้อง และเมื่อกด F5 ข้อมูลที่เพิ่งเพิ่มไปก็ยังคงอยู่ ไม่หายไป | PASS | [images/persistence-add-refresh.png](../evidence/images/persistence-add-refresh.png) |
| TC-L5-15 | ทดสอบ filters ทุกค่า | รายการคำร้องบนหน้าจอเปลี่ยนไปตามป้ายตัวกรองที่เลือกอย่างถูกต้อง โดยตัวเลขในแผงสรุปด้านบนไม่เปลี่ยนแปลง | PASS | [images/filter-working.png](../evidence/images/filter-working.png) |
| TC-L5-16 | ลบ request แล้ว refresh | เมื่อกดลบ คำร้องหายไปจากหน้าจอทันทีพร้อมมีข้อความยืนยัน และเมื่อกด F5 ข้อมูลที่ถูกลบก็ไม่กลับมา | PASS | [images/persistence-delete-refresh.png](../evidence/images/persistence-delete-refresh.png) |
| TC-L5-17 | Reset Demo Data | ข้อมูลตัวอย่าง 3 รายการถูกรีเซ็ตกลับมาและมีข้อความแจ้งเตือน | PASS | [images/reset-demo-data.png](../evidence/images/reset-demo-data.png) |
| TC-L5-18 | malformed + wrong schema แล้ว reload | ระบบกู้ข้อมูลตัวอย่างกลับมาแสดงบนหน้าจอ พร้อมมีแถบข้อความสีเขียวแจ้งเตือนการกู้คืน โดยไม่มี Error ค้างใน Console หรือหน้าจอขาว | PASS | [images/storage-recovery.png](../evidence/images/storage-recovery.png) |
| TC-L5-19 | เทียบ summary กับ data | ตัวเลขในแผงสรุปคำนวณและอัปเดตได้ตรงกับจำนวนรายการคำร้องที่แสดงอยู่จริงเสมอเมื่อมีการเพิ่มหรือลบข้อมูล | PASS | [images/dashboard-stats-update.png](../evidence/images/dashboard-stats-update.png) |
| TC-L5-20 | viewport 375px ทุก page | บนหน้าจอ 375px การแสดงผลจัดเรียงได้ดี ไม่มีแถบเลื่อนแนวนอน ปุ่มและข้อความแสดงผลอยู่ในกรอบที่กดใช้งานได้ปกติ | PASS | [images/responsive-375.png](../evidence/images/responsive-375.png) |
| TC-L5-21 | keyboard only | สามารถใช้คีย์บอร์ดเลื่อนโฟกัสไปตามปุ่ม, ฟอร์ม, และลิงก์ต่างๆ ได้ครบถ้วน พร้อมมีกรอบไฮไลต์บอกตำแหน่งการโฟกัสชัดเจน | PASS | [images/keyboard-focus.png](../evidence/images/keyboard-focus.png) |
| TC-L5-22 | checker/build/preview | build สำเร็จโดยไม่มี Error และใน preview สามารถ refresh ทุกลิงก์ได้ปกติโดยไม่เกิด 404 | PASS | ✓ 41 modules transformed.<br>✓ built in 263ms|
| TC-L5-23 | Pages Incognito + hash refresh | ในโหมดไม่ระบุตัวตน หน้าเว็บโหลดและ refresh ได้ปกติ ไม่มีหน้า 404 มีข้อมูลตั้งต้น 3 รายการโผล่มาโดยไม่มีข้อความกู้ข้อมูล | PASS | [images/pages-incognito.png](../evidence/images/pages-incognito.png)|
| TC-L5-24 | merged PR + tag | ทำการเปิด Pull Request เข้า main สำเร็จ และ push tag lab-05-submission-v1 ไปยัง repository เรียบร้อยแล้ว | PASS | PR_URL : https://github.com/jirayuwongtom/engse203-student-labs-68543210022/pull/5 <br> commit/tag : https://github.com/jirayuwongtom/engse203-student-labs-68543210022/releases/tag/lab-05-submission-v1 |

## Rerun log

เก็บร่องรอย FAIL เดิม แล้วเพิ่มบรรทัด rerun แทนการลบประวัติ

| Test ID | เวลา | Fix | Actual result | Status |
|---|---|---|---|---|
| TC-L5-14 | 20/08 20:00 | เติมเครื่องหมาย `$` หน้าตัวแปรใน Template Literal เป็น `REQ-${time}-${random}` | เพิ่มคำร้องสำเร็จ ระบบสุ่มรหัสถูกต้อง (เช่น REQ-MT1LHNGQ-D7PI) เด้งไปหน้ารายละเอียด และกด F5 แล้วข้อมูลคำร้องใหม่ยังคงอยู่ | PASS |
| TC-L5-18 | 20/08 20:44 | เพิ่ม `onRecovery` ในฟังก์ชัน `loadNormalRequests()`  | ระบบสามาถกู้ข้อมูลตัวอย่างกลับมาแสดงบนหน้าจอ พร้อมมีข้อความแจ้งเตือนการกู้คืนสำเร็จ | PASS |

