import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DatabaseSync } from 'node:sqlite';
import { readFileSync, existsSync } from 'node:fs';


let db;

// ตำแหน่งของ "ไฟล์นี้" ไม่ใช่ตำแหน่งที่รันคำสั่ง
const HERE = path.dirname(fileURLToPath(import.meta.url));
const API_ROOT = path.resolve(HERE, '../..');
const DB_FILE = process.env.DB_FILE ?? path.join(API_ROOT, 'data', 'campus.db');
const SCHEMA_FILE = path.join(API_ROOT, 'data', 'schema.sql');

export async function loadSeed() {
  /**
   *
   * TODO W10-2 (CP27) · ⚠ path ต้องอ้างจากตำแหน่งไฟล์นี้ ไม่ใช่จากที่รันคำสั่ง
   *   ใช้ fileURLToPath(import.meta.url) — ไม่งั้น dev กับ checker หาไฟล์คนละที่
   */

  db = new DatabaseSync(DB_FILE);
  db.exec('PRAGMA foreign_keys = ON');   // ⚠ ต้องสั่งทุกครั้ง

  // ถ้ายังไม่มีตาราง (ไฟล์ใหม่) ให้สร้างจาก schema.sql
  const ready = db.prepare(
    "SELECT COUNT(*) c FROM sqlite_master WHERE type='table' AND name='requests'"
  ).get().c;
  if (!ready && existsSync(SCHEMA_FILE)) {
    db.exec(readFileSync(SCHEMA_FILE, 'utf8'));
  }
  
}

export function findAll({ status } = {}) {
  /**
   * TODO W10-3 (CP28) · เปลี่ยนเป็น SELECT จากฐานข้อมูล
   *   - ใช้ JOIN กับตาราง users เพื่อคืน requesterName (ไม่ใช่ requester_id)
   *   - ตั้งชื่อคอลัมน์ด้วย AS ให้ตรงกับที่ frontend ใช้
   *   - ถ้ามี status ให้เติม WHERE r.status = ?
   *   คำใบ้: คัดลอก query จาก queries.sql ที่ทำสัปดาห์ที่แล้วมาปรับ
   */
  return db.prepare('SELECT * FROM requests').all();
}

export function findById(id) {
  /** TODO W10-4 (CP28) · SELECT ... WHERE r.id = ?  · ไม่พบให้คืน null */
  return requests.find((r) => r.id === id) ?? null;
}

export function create(input) {
  /**
   * TODO W10-5 (CP29) · INSERT ลงฐานข้อมูล
   *   ⚠ frontend ส่ง requesterName (ชื่อ) มา แต่ตารางเก็บ requester_id (ตัวเลข)
   *   → ต้องหา id ของชื่อนั้นก่อน ถ้ายังไม่มีในระบบให้สร้าง user ใหม่
   *   นี่คือ "หน้าที่ของ service" ที่พูดถึงในบทที่ 9 ของสัปดาห์ที่แล้ว
   */
  throw new Error('TODO W10-5: create');
}

export function updateStatus(id, status) {
  /** TODO W10-6 (CP30) · UPDATE requests SET status = ? WHERE id = ? · ไม่พบคืน null */
  throw new Error('TODO W10-6: updateStatus');
}

export function remove(id) {
  /** TODO W10-7 (CP30) · DELETE FROM requests WHERE id = ? · ไม่พบคืน null */
  throw new Error('TODO W10-7: remove');
}
