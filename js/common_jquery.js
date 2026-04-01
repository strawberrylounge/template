$(document).ready(function () {
  /* SELECTBOX */
  $(".selectbox-wrap, .footer-selectbox-wrap").on("click", function (e) {
    e.stopPropagation(); // 이벤트 버블링 방지
    $(this).toggleClass("visible");
    // aria-role
    $(this).attr("aria-expanded", $(this).hasClass("visible"));
  });

  $(".selectbox-option, .footer-selectbox-option").on("click", function () {
    $(".selectbox-option, .footer-selectbox-option").attr("aria-selected", "false");
    $(this).attr("aria-selected", "true");
  });

  // 외부 영역 클릭 시 셀렉트박스 닫기
  $(document).click(function (e) {
    if (!$(e.target).closest(".selectbox-wrap, .footer-selectbox-wrap").length) {
      $(".selectbox-wrap, .footer-selectbox-wrap").removeClass("visible");
      $(".selectbox-wrap, .footer-selectbox-wrap").attr("aria-expanded", "false");
    }
  });

  /* ACCORDION */
  $(".course-detail").each(function() {
    const $panel = $(this);
    const $btn = $panel.closest(".course-item").find(".btn-toggle-panel");
    const isExpanded = $btn.attr("aria-expanded") === "true"; // 모든 패널 hidden 상태 확인
    
    if (!isExpanded) {
      $panel.prop("hidden", true);
    }
  });
  // 토글 버튼 클릭 이벤트
  $(".btn-toggle-panel").on("click", function() {
    const $btn = $(this);
    const $panel = $btn.closest(".course-item").find(".course-detail");
    const isExpanded = $btn.attr("aria-expanded") === "true";
    
    // 상태 업데이트
    $btn.attr("aria-expanded", !isExpanded);
    $btn.toggleClass("opened");
    
    // 애니메이션 + hidden 토글
    if (isExpanded) {
      $panel.slideUp(300, function() {
        $panel.prop("hidden", true);
      });
    } else {
      $panel.prop("hidden", false).slideDown(300);
    }
  });
  
  // 메뉴 토글 버튼
  $(".btn-toggle-menu").on("click", function() {
    $(this).toggleClass("opened");
    $(this).next().toggleClass("visible");
  });

  // MOBILE gnb display
  $(".btn-open-gnb").on("click", function () {
    $("body").addClass("fixed");
    $(".gnb").addClass("visible");
  })
  $(".btn-close-gnb").on("click", function () {
    $("body").removeClass("fixed");
    $(".gnb").removeClass("visible");
  })
});

/* 공통 함수 */

// 뒤로 가기
function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = '/member/customer/notice.do'; // 메인 페이지로
    }
}