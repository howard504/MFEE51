//==============================page1==============================

document.getElementById("homeDoc").addEventListener("click", function () {
	document.querySelector(".docSelectBottom").style.display = "flex ";
	document.querySelector(".beautySelectBottom").style.display = "none ";
	document.querySelector(".nightSelectBottom").style.display = "none ";
	this.classList.add("changeColor");
	document.getElementById("homeBeauty").classList.remove("changeColor");
	document.getElementById("homeNight").classList.remove("changeColor");
});

document.getElementById("homeBeauty").addEventListener("click", function () {
	document.querySelector(".docSelectBottom").style.display = "none ";
	document.querySelector(".beautySelectBottom").style.display = "flex ";
	document.querySelector(".nightSelectBottom").style.display = "none ";
	this.classList.add("changeColor");
	document.getElementById("homeDoc").classList.remove("changeColor");
	document.getElementById("homeNight").classList.remove("changeColor");
});

document.getElementById("homeNight").addEventListener("click", function () {
	document.querySelector(".docSelectBottom").style.display = "none ";
	document.querySelector(".beautySelectBottom").style.display = "none ";
	document.querySelector(".nightSelectBottom").style.display = "flex ";
	this.classList.add("changeColor");
	document.getElementById("homeBeauty").classList.remove("changeColor");
	document.getElementById("homeDoc").classList.remove("changeColor");
});

// 監聽整個 DOCUMENT 在全部 走過一遍之後執行以下 function()
document.addEventListener("DOMContentLoaded", function () {
	// 選取 擁有dot屬性的元素 放到一個名為 dots 的變數裡面
	// 選取 擁有page屬性的元素 放到一個名為 pages 的變數裡面
	// 選取 擁有container屬性的元素 放到一個名為 container 的變數裡面
	// 這邊如果我的html 裡面有很多 page屬性的元素 pages 就會變成類array(類陣列)不是陣列但還是可以用索引訪問元素
	var dots = document.querySelectorAll(".dot");
	var pages = document.querySelectorAll(".page");
	var container = document.querySelector(".container");

	// 宣告一個變數，用來確保動畫只會執行一次
	var animated = false; // 修改部分

	// 宣告一個名為 currentPage 的函數
	// 這個函數會平滑地滾動到 pages[pageNum - 1] 這個頁面
	// 並且會更新導航點的狀態
	function currentPage(pageNum) {
		// 使用 scrollIntoView 方法，將指定的頁面元素平滑地滾動到可視區域
		pages[pageNum - 1].scrollIntoView({ behavior: "smooth" });

		// 更新導航點的狀態
		updateDots(pageNum);

		// 在翻頁到第三頁時觸發動畫，並確保動畫只會執行一次
		if (pageNum === 3 && !animated) {
			// 修改部分
			startAnimation(); // 修改部分
			animated = true; // 修改部分
		} // 修改部分
	}

	function updateDots(activePage) {
		dots.forEach(function (dot, index) {
			if (index + 1 === activePage) {
				dot.classList.add("active");
			} else {
				dot.classList.remove("active");
			}
		});
	}

	function onScroll() {
		var scrollPos = container.scrollTop + window.innerHeight / 2;
		pages.forEach(function (page, index) {
			if (
				scrollPos >= page.offsetTop &&
				scrollPos < page.offsetTop + page.offsetHeight
			) {
				updateDots(index + 1);
				// 在翻頁到第三頁時觸發動畫，並確保動畫只會執行一次
				if (index + 1 === 3 && !animated) {
					// 修改部分
					startAnimation(); // 修改部分
					animated = true; // 修改部分
				} // 修改部分
			}
		});
	}

	container.addEventListener("scroll", onScroll);

	dots.forEach(function (dot, index) {
		dot.addEventListener("click", function () {
			currentPage(index + 1);
		});
	});

	// 初始化滾動位置，確保正確的圓點被設置為活動狀態
	onScroll();
});

document.addEventListener("DOMContentLoaded", () => {
	const footerHandles = document.querySelectorAll(".footer");
	footerHandles.forEach((handle) => {
		handle.addEventListener("click", () => {
			const footer = handle.closest(".footer");
			footer.classList.toggle("footer-expanded");
		});
	});
});
// =========================Page2=========================================

let scrollcontainer = document.querySelector(".cards");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

scrollcontainer.addEventListener("wheel", function (evt) {
	evt.preventDefault();
	scrollcontainer.scrollLeft += evt.deltaY;
});

next.addEventListener("click", function () {
	scrollcontainer.style.scrollBehavior = "smooth";
	scrollcontainer.scrollLeft += 400;
});

prev.addEventListener("click", function () {
	scrollcontainer.style.scrollBehavior = "smooth";
	scrollcontainer.scrollLeft -= 400;
});

//==========================page3===================================
// 修改部分：新增 startAnimation 函數，用於觸發數字動畫
function startAnimation() {
	const animalHome = document.querySelector(".Number1");
	animateNumber(animalHome, 1, 200, 3000);

	const animalMoney = document.querySelector(".Number2");
	animateNumber(animalMoney, 1, 1866224, 3000);

	const animalfood = document.querySelector(".Number3");
	animateNumber(animalfood, 1, 3212531, 3000);

	const animalNumber = document.querySelector(".Number4");
	animateNumber(animalNumber, 1, 120000, 3000);
} // 修改部分

function animateNumber(element, start, end, duration) {
	let startTime = null;
	// element  要顯示數字的html
	// start    開始的數字
	// end      結束的數字
	// duration 動畫持續時間(毫秒)
	function updateNumber(currentTime) {
		// updateNumber 每一幀的動畫
		// currentTime  動畫開始到現在的時間
		if (!startTime) startTime = currentTime;
		// 如果 !startTime = true  | 開始時間 = 動畫開始到現在的時間
		const progress = currentTime - startTime;
		// progress 計算經過的時間
		const currentNumber = Math.min(
			Math.floor((progress / duration) * (end - start) + start),
			end
		);
		// progress / duration
		// 這部分計算動畫已經完成的比例。progress 是當前時間已經過去的時間量，
		// 而 duration 是動畫總共應該持續的時間。這個比值範圍在0到1之間：
		// end - start
		// 這部分計算從開始數字到目標數字的差值，即數字需要跳動的總範圍。
		// (progress / duration) * (end - start)
		// 這部分計算已經完成的數字範圍。它表示當前時間點應該顯示的數字範圍：

		// 外面包一層 math.floor 主要功能是 要每幀顯示出的數字是整數
		element.textContent = currentNumber.toLocaleString();
		// 這邊主要是美觀 讓輸出的數字有 逗號可以隔開
		if (currentNumber < end) {
			requestAnimationFrame(updateNumber);
		}
		// requestAnimationFrame 是一個瀏覽器提供的API，用於調度下一次重繪。
		// 它會在下一次瀏覽器重繪之前調用 updateNumber 函數。
		// 這樣可以創建一個平滑的動畫效果，因為 requestAnimationFrame 通常每秒調用60次（60fps），
		// 這樣的更新頻率可以讓動畫看起來很流暢。
		// 一個確保的概念 如果出現錯誤她會確保 數字在從新跑動
	}

	requestAnimationFrame(updateNumber);
}
