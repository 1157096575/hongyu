$(function(){
	$('.honour .liWrap').mouseover(function(){
		$(this).addClass('current').siblings().removeClass('current')
	})
	$('.honour .people').click(function(event) {
		/* Act on the event */
		$('.honour .peoPle').show();
		$('.honour .loadDown').hide();
		$(this).css('backgroundPosition','-72px -286px');
		$('.honour .loaddown').css('backgroundPosition','-72px -332px')
	})
	$('.honour .loaddown').click(function(event) {
		/* Act on the event */
		$('.honour .loadDown').show();
		$('.honour .peoPle').hide();
		$(this).css('backgroundPosition','-72px -286px');
		$('.honour .people').css('backgroundPosition','-72px -332px')
	})
	$('.like h2 span').mouseover(function(event) {
		/* Act on the event */
		$('.like ul').toggle()
	});
	$('.searchWrap .search input').focus(function(event) {
		if ($(this).val() == '请输入内容') {
			$(this).val('').css('color','#333')
		}
	})
	$('.searchWrap .search input').blur(function(event) {
		if($(this).val() == ''){
			$(this).val('请输入内容').css('color','#999')
		}
	})
})
