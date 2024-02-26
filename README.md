# תיעוד לאפליקציית ציור על לוח מחיק בזמן אמת ב-Node.js 🖋️📄🖌️

## מבוא:

האפליקציה היא לוח ציור שיתופי בזמן אמיתי שממומש באמצעות Node.js, Express.js ו-Socket.IO. היא מאפשרת למשתמשים מרובים לצייר על קנבס משותף, לעדכן את הציורים שלהם לכל המשתמשים האחרים בזמן אמיתי ולנקות את הקנבס כשצריך.

## דרישות:

כדי להריץ את האפליקציה יהיה צורך ב:

- Node.js
- npm (בדרך כלל מגיע עם Node.js)
- גישה לממשק שורת הפקודה או לטרמינל

## תלויות:

האפליקציה מסתמכת על התלויות הראשיות הבאות:

- Express.js לשירות קבצים סטטיים וטיפול בבקשות HTTP.
- Socket.IO לאפשר תקשורת דו-כיוונית, מבוססת אירועים ובזמן אמיתי.
- רכיב fs (מערכת קבצים) לקריאה וכתיבה של מצב הלוח לקובץ.

## הגדרה מקומית והרצת האפליקציה:

  ודא שהתקנות Node.js ו-npm מותקנים במחשב שלך על ידי הרצת:

```bash
node --version
npm --version
```

  העתק את הקוד או הורד את קוד המקור למחשב המקומי שלך.

   נווט אל התיקייה הראשית של האפליקציה בטרמינל או בממשק שורת הפקודה שלך.

   התקן את מודולי Node.js הנדרשים על ידי הרצת:

```bash
npm install
```

פקודה זו תתקין את Express.js, http, Socket.IO ורכיב fs כפי שמוגדר בקובץ `package.json`.

  התחל את השרת על ידי הרצת:

```bash
node <your-main-js-file>.js
```
**הערה**: החלף את `<your-main-js-file>` בשם קובץ הכניסה האמיתי של האפליקציה שלך ב-Node.js, למשל `app.js` או `index.js`.

  פתח את הכתובת `http://localhost:3000` בדפדפנים או כרטיסיות מרובות כדי לבדוק את הפונקציונליות בזמן אמיתי.

## פונקציונליות האפליקציה:

  **שירות קבצים סטטיים**: Express.js משרת קבצים סטטיים הנמצאים בתיקייה `public`.
  
  **חיבור Socket.IO**: בעת חיבור משתמש, השרת מתעד את האירוע, שולח את מצב הלוח הנוכחי למשתמש ומאזין לאירועי `draw` ו-`clear`.

  **ציור על הלוח**: כאשר משתמש מצייר על הלוח, נתוני הציור משודרים לכל המשתמשים המחוברים, ומצב הלוח מתעדכן ונשמר בקובץ.

  **ניקוי הלוח**: אם משתמש אותחל אירוע נקיון, הלוח נמחק לחלוטין, האירוע משודר ומצב הלוח לאחר מכן מתאפס ונשמר.

## נראות האתר והשימוש בו:


https://github.com/NoamHack/Drawing-Board/assets/144808954/bc83d7df-922f-4155-9507-d28b8f6e13bc

