document.addEventListener("DOMContentLoaded", () => {
	const footer = document.querySelector(".footer");

	footer.addEventListener("click", () => {
		footer.classList.toggle("footer-expanded");
	});
});
function toggleInfoBottom(element) {
	const infoSeeMore = element.querySelector("img");
	const infoBottom = element.parentElement.querySelector(".beautyInfoBottom");

	if (infoBottom.style.display === "none" || infoBottom.style.display === "") {
		infoBottom.style.display = "flex";
		setTimeout(() => {
			infoBottom.classList.add("show");
		}, 100); // 短暫延遲以確保 display 屬性已應用
		infoSeeMore.classList.add("rotated");
	} else {
		infoBottom.classList.remove("show");
		setTimeout(() => {
			infoBottom.style.display = "none";
		}, 100); // 等待過渡效果完成後隱藏元素
		infoSeeMore.classList.remove("rotated");
	}
}
