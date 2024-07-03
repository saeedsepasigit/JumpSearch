function jumpSearch(arr, x) {
    let n = arr.length;
    let step = Math.floor(Math.sqrt(n)); // اندازه‌ی گام‌های پرش

    let prev = 0;
    while (arr[Math.min(step, n) - 1] < x) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) return -1; // اگه از انتهای آرایه عبور کردیم
    }

    while (arr[prev] < x) {
        prev++;
        if (prev == Math.min(step, n)) return -1; // اگه به گام بعدی یا انتهای آرایه رسیدیم
    }

    if (arr[prev] == x) return prev; // اگه عنصر مورد نظر پیدا شد

    return -1; // اگه عنصر مورد نظر پیدا نشد
}

// مثال استفاده:
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let x = 4;
let result = jumpSearch(arr, x);
console.log(result); // خروجی: 4