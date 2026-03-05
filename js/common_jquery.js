$(document).ready(function () {
  // SELECTBOX
  $(".selectbox-wrap").click(function (e) {
    e.stopPropagation(); // 이벤트 버블링 방지
    $(this).toggleClass("visible");
    // aria-role
    $(this).attr("aria-expanded", $(this).hasClass("visible"));
  });

  $(".select-option").click(function () {
    $(".select-option").attr("aria-selected", "false");
    $(this).attr("aria-selected", "true");
  });

  // 외부 영역 클릭 시 셀렉트박스 닫기
  $(document).click(function (e) {
    if (!$(e.target).closest(".selectbox-wrap").length) {
      $(".selectbox-wrap").removeClass("visible");
      $(".selectbox-wrap").attr("aria-expanded", "false");
    }
  });
});
