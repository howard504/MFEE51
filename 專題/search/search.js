document.querySelectorAll(".puppyCard").forEach((card) => {
	card.addEventListener("click", () => {
		document
			.querySelectorAll(".puppyCard")
			.forEach((c) => c.classList.remove("clicked"));
		card.classList.add("clicked");
	});
});

// 以下是新增的搜尋功能程式碼
// 新增事件監聽到搜尋框
document
	.getElementById("searchYourPuppy")
	.addEventListener("input", function () {
		const searchValue = this.value.toLowerCase(); // 取得搜尋框的值並轉為小寫
		document.querySelectorAll(".puppyCard").forEach((card) => {
			const puppyName = card.querySelector("span").textContent.toLowerCase(); // 取得卡片上的名字並轉為小寫
			if (puppyName.includes(searchValue)) {
				card.style.display = "flex"; // 顯示匹配的卡片
			} else {
				card.style.display = "none"; // 隱藏不匹配的卡片
			}
		});
	});

document.getElementById("closePage").addEventListener("click", function () {
	document.getElementById("searchFurry").style.display = "none";
});
const cardBg = document.getElementById("cardBg");

// 向左滑動
document.getElementById("leftButton").addEventListener("click", function () {
	cardBg.scrollBy({
		top: 0,
		left: -1500,
		behavior: "smooth",
	});
});

// 向右滑動
document.getElementById("rightButton").addEventListener("click", function () {
	cardBg.scrollBy({
		top: 0,
		left: 1500,
		behavior: "smooth",
	});
});
