
$(document).ready(function() {
	
	$(document).pngFix();
	
	$("#iphone").animate({ 
        left: "0px"
      }, 600 );
      
    $("li.switch1").hover(function(){
    	$("#switcher #pill").stop(true, true);
		$("#switcher #pill").animate( { left: "2px" }, 250);
		$(".scroll").animate( { left: "0px" }, 350);
		$("#steps li.step1").fadeIn("slow");
		$("#steps li.step2").fadeOut("fast");
		$("#steps li.step3").fadeOut("fast");
		$("#steps li.step4").fadeOut("fast");
	},
		function(){$(this).addClass("done");
	});

	$("li.switch2").hover(function(){
		$("#switcher #pill").stop(true, true);
		$("#switcher #pill").animate( { left: "92px" }, 250);
		$(".scroll").animate( { left: "-225px" }, 350);
		$("#steps li.step1").fadeOut("fast");
		$("#steps li.step2").fadeIn("slow");
		$("#steps li.step3").fadeOut("fast");
		$("#steps li.step4").fadeOut("fast");
	},
		function(){$(this).addClass("done");
	});
	
	$("li.switch3").hover(function(){
		$("#switcher #pill").stop(true, true);
		$("#switcher #pill").animate( { left: "184px" }, 250);
		$(".scroll").animate( { left: "-450px" }, 350);
		$("#steps li.step1").fadeOut("fast");
		$("#steps li.step2").fadeOut("fast");
		$("#steps li.step3").fadeIn("slow");
		$("#steps li.step4").fadeOut("fast");
	},
		function(){$(this).addClass("done");
	});
	
	$("li.switch4").hover(function(){
		$("#switcher #pill").stop(true, true);
		$("#switcher #pill").animate( { left: "274px" }, 250);
		$(".scroll").animate( { left: "-675px" }, 350);
		$("#steps li.step1").fadeOut("fast");
		$("#steps li.step2").fadeOut("fast");
		$("#steps li.step3").fadeOut("fast");
		$("#steps li.step4").fadeIn("slow");
	},
		function(){$(this).addClass("done");
	});
	
	$('#screenshots a#one').fancyZoom({directory: '/images/'});
	$('#screenshots a#two').fancyZoom({directory: '/images/'});
	$('#screenshots a#three').fancyZoom({directory: '/images/'});
	$('#screenshots a#four').fancyZoom({directory: '/images/'});
	
	$("input.sign-name").focus(function(){
		if ( $(this).val() == "Enter your name")
        $(this).val('');
	});
	$("input.sign-name").blur(function(){
		if ( $(this).val() == "")
		$(this).val('Enter your name');
	});
	
	$("input.sign-email").focus(function(){
		if ( $(this).val() == "Enter your email address")
        $(this).val('');
	});
	$("input.sign-email").blur(function(){
		if ( $(this).val() == "")
		$(this).val('Enter your email address');
	});
	
	$("#head span a").hover(function(){
		$(this).children().stop(true, true);
    	$(this).children().fadeIn("fast");
	},
		function(){$(this).children().fadeOut("fast");
	});
	
	$("#head strong").hover(function(){
		$(this).stop(true, true);
    	$(this).fadeTo("fast", 0.8);
	},
		function(){$(this).fadeTo("fast", 1.0);
	});
	
	$("#head h1 a").hover(function(){
		$(this).children().stop(true, true);
    	$(this).children().fadeIn("fast");
	},
		function(){$(this).children().fadeOut("fast");
	});
	
	/*$('#screenshots a#one').hover(function(){
			$("#screenshots img").stop(true, true);
			$('#screenshots a#two img, #screenshots a#three img, #screenshots a#four img').fadeTo("fast", 0.4);
		},
		function(){
			$('#screenshots a#two img, #screenshots a#three img, #screenshots a#four img').fadeTo("slow", 1.0);
		}
	);
	
	$('#screenshots a#two').hover(function(){
			$("#screenshots img").stop(true, true);
			$('#screenshots a#one img, #screenshots a#three img, #screenshots a#four img').fadeTo("fast", 0.4);
		},
		function(){
			$('#screenshots a#one img, #screenshots a#three img, #screenshots a#four img').fadeTo("slow", 1.0);
		}
	);
	
	$('#screenshots a#three').hover(function(){
			$("#screenshots img").stop(true, true);		
			$('#screenshots a#one img, #screenshots a#two img, #screenshots a#four img').fadeTo("fast", 0.4);
		},
		function(){
			$('#screenshots a#one img, #screenshots a#two img, #screenshots a#four img').fadeTo("slow", 1.0);
		}
	);
	
	$('#screenshots a#four').hover(function(){
			$("#screenshots img").stop(true, true);
			$('#screenshots a#one img, #screenshots a#two img, #screenshots a#three img').fadeTo("fast", 0.4);
		},
		function(){
			$('#screenshots a#one img, #screenshots a#two img, #screenshots a#three img').fadeTo("slow", 1.0);
		}
	);*/
	
});


eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('9w(9o(p,a,c,k,e,r){e=9o(c){9p(c<a?\'\':e(9s(c/a)))+((c=c%a)>35?9t.9x(c+29):c.9y(36))};9q(!\'\'.9u(/^/,9t)){9r(c--)r[e(c)]=k[c]||e(c);k=[9o(e){9p r[e]}];e=9o(){9p\'\\\\w+\'};c=1};9r(c--)9q(k[c])p=p.9u(9v 9z(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);9p p}(\'16 G="/",C=5W.1X,H,D,B,F;I();13 5X(5b){16 1T="";3P=33(4j/2);12(3P==4j-3P){4j=3P*2+1}3Q=B-3P;12(3Q<1){3Q=1}2P=33(5b/27)+1;12(2P-1==5b/27){2P=2P-1}4k=3Q+4j-1;12(4k>2P){4k=2P}1T+="<3l 1E=\\\'7B\\\'>7C "+B+" 7D "+2P+"</3l>";16 5c=33(B)-1;12(B>1){12(B==2){12(D=="34"){1T+="<a 1X=\\\\""+G+"\\\\">"+4l+"</a>"}17{1T+="<a 1X=\\\\"/2Q/2R/"+F+"?&1W-2B="+27+"\\\\">"+4l+"</a>"}}17 12(D=="34"){1T+="<a 1X=\\\\"#\\\\" 3m=\\\\"4m("+5c+");1a 1M\\\\">"+4l+"</a>"}17{1T+="<a 1X=\\\\"#\\\\" 3m=\\\\"4n("+5c+");1a 1M\\\\">"+4l+"</a>"}}1Z(16 2t=3Q;2t<=4k;2t++){12(B==2t){1T+="<3l 1E=\\\\"7E\\\\">"+2t+"</3l>"}17 12(2t==1){12(D=="34"){1T+="<a 1X=\\\\""+G+"\\\\">1</a>"}17{1T+="<a 1X=\\\\"/2Q/2R/"+F+"?&1W-2B="+27+"\\\\">1</a>"}}17 12(D=="34"){1T+="<a 1X=\\\\"#\\\\" 3m=\\\\"4m("+2t+");1a 1M\\\\">"+2t+"</a>"}17{1T+="<a 1X=\\\\"#\\\\" 3m=\\\\"4n("+2t+");1a 1M\\\\">"+2t+"</a>"}}16 5d=33(B)+1;12(B<2P){12(D=="34"){1T+="<a 1X=\\\\"#\\\\" 3m=\\\\"4m("+5d+");1a 1M\\\\">"+1w+"</a>"}17{1T+="<a 1X=\\\\"#\\\\" 3m=\\\\"4n("+5d+");1a 1M\\\\">"+1w+"</a>"}}16 3n=2C.7F("3n");16 5e=2C.7G("7H-7I");1Z(16 p=0;p<3n.2D;p++){3n[p].4o=1T}12(3n&&3n.2D>0){1T=""}12(5e){5e.4o="<1L 1E=\\\\"7J\\\\">"+1T+"</1L>"}}13 5f(4p){16 4q=4p.4q;16 5Y=33(4q.7K$7L.$t,10);5X(5Y)}13 I(){16 28=C;12(28.1z("/2Q/2R/")!=-1){12(28.1z("?4r-1W")!=-1){F=28.3o(28.1z("/2Q/2R/")+14,28.1z("?4r-1W"))}17{F=28.3o(28.1z("/2Q/2R/")+14,28.1z("?&1W"))}}12(28.1z("?q=")==-1&&28.1z(".1T")==-1){12(28.1z("/2Q/2R/")==-1){D="34";12(C.1z("#3p=")!=-1){B=C.3o(C.1z("#3p=")+8,C.2D)}17{B=1}2C.5Z("<2u 21=\\\\""+G+"4s/27/4t?1W-2B=1&3q=4u-4v-2u&4w=5f\\\\"></2u>")}17{D="2R";12(28.1z("&1W-2B=")==-1){27=20}12(C.1z("#3p=")!=-1){B=C.3o(C.1z("#3p=")+8,C.2D)}17{B=1}2C.5Z("<2u 21=\\\\""+G+"4s/27/4t/-/"+F+"?3q=4u-4v-2u&4w=5f&1W-2B=1\\\\" ></2u>")}}}13 4m(3r){4x=(3r-1)*27;H=3r;16 4y=2C.61("62")[0];16 2S=2C.3s("2u");2S.63="65/66";2S.67("21",G+"4s/27/4t?5g-1H="+4x+"&1W-2B=1&3q=4u-4v-2u&4w=5h");4y.68(2S)}13 4n(3r){4x=(3r-1)*27;H=3r;16 4y=2C.61("62")[0];16 2S=2C.3s("2u");2S.63="65/66";2S.67("21",G+"4s/27/4t/-/"+F+"?5g-1H="+4x+"&1W-2B=1&3q=4u-4v-2u&4w=5h");4y.68(2S)}13 5h(4p){5i=4p.4q.7M[0];16 69=5i.6a.$t.3o(0,19)+5i.6a.$t.3o(23,29);16 5j=7N(69);12(D=="34"){16 5k="/2Q?4r-1W="+5j+"&1W-2B="+27+"#3p="+H}17{16 5k="/2Q/2R/"+F+"?4r-1W="+5j+"&1W-2B="+27+"#3p="+H}5W.1X=5k}2o.2a.7O=2o.2a.6b;2o.6c(2o.2a,{6d:"6e",6b:13(x,t,b,c,d){1a 2o.2a[2o.2a.6d](x,t,b,c,d)},7P:13(x,t,b,c,d){1a c*(t/=d)*t+b},6e:13(x,t,b,c,d){1a-c*(t/=d)*(t-2)+b},7Q:13(x,t,b,c,d){12((t/=d/2)<1){1a c/2*t*t+b}1a-c/2*(--t*(t-2)-1)+b},7R:13(x,t,b,c,d){1a c*(t/=d)*t*t+b},7S:13(x,t,b,c,d){1a c*((t=t/d-1)*t*t+1)+b},4z:13(x,t,b,c,d){12((t/=d/2)<1){1a c/2*t*t*t+b}1a c/2*((t-=2)*t*t+2)+b},7T:13(x,t,b,c,d){1a c*(t/=d)*t*t*t+b},7U:13(x,t,b,c,d){1a-c*((t=t/d-1)*t*t*t-1)+b},7V:13(x,t,b,c,d){12((t/=d/2)<1){1a c/2*t*t*t*t+b}1a-c/2*((t-=2)*t*t*t-2)+b},7W:13(x,t,b,c,d){1a c*(t/=d)*t*t*t*t+b},7X:13(x,t,b,c,d){1a c*((t=t/d-1)*t*t*t*t+1)+b},7Y:13(x,t,b,c,d){12((t/=d/2)<1){1a c/2*t*t*t*t*t+b}1a c/2*((t-=2)*t*t*t*t+2)+b},7Z:13(x,t,b,c,d){1a-c*1i.5l(t/d*(1i.2b/2))+c+b},80:13(x,t,b,c,d){1a c*1i.3t(t/d*(1i.2b/2))+b},81:13(x,t,b,c,d){1a-c/2*(1i.5l(1i.2b*t/d)-1)+b},82:13(x,t,b,c,d){1a t==0?b:c*1i.2T(2,10*(t/d-1))+b},83:13(x,t,b,c,d){1a t==d?b+c:c*(-1i.2T(2,-10*t/d)+1)+b},84:13(x,t,b,c,d){12(t==0){1a b}12(t==d){1a b+c}12((t/=d/2)<1){1a c/2*1i.2T(2,10*(t-1))+b}1a c/2*(-1i.2T(2,-10*--t)+2)+b},85:13(x,t,b,c,d){1a-c*(1i.2v(1-(t/=d)*t)-1)+b},86:13(x,t,b,c,d){1a c*1i.2v(1-(t=t/d-1)*t)+b},87:13(x,t,b,c,d){12((t/=d/2)<1){1a-c/2*(1i.2v(1-t*t)-1)+b}1a c/2*(1i.2v(1-(t-=2)*t)+1)+b},88:13(x,t,b,c,d){16 s=1.3u;16 p=0;16 a=c;12(t==0){1a b}12((t/=d)==1){1a b+c}12(!p){p=d*0.3}12(a<1i.35(c)){a=c;16 s=p/4}17{16 s=p/(2*1i.2b)*1i.5m(c/a)}1a-(a*1i.2T(2,10*(t-=1))*1i.3t((t*d-s)*2*1i.2b/p))+b},89:13(x,t,b,c,d){16 s=1.3u;16 p=0;16 a=c;12(t==0){1a b}12((t/=d)==1){1a b+c}12(!p){p=d*0.3}12(a<1i.35(c)){a=c;16 s=p/4}17{16 s=p/(2*1i.2b)*1i.5m(c/a)}1a a*1i.2T(2,-10*t)*1i.3t((t*d-s)*2*1i.2b/p)+c+b},8a:13(x,t,b,c,d){16 s=1.3u;16 p=0;16 a=c;12(t==0){1a b}12((t/=d/2)==2){1a b+c}12(!p){p=d*0.3*1.5}12(a<1i.35(c)){a=c;16 s=p/4}17{16 s=p/(2*1i.2b)*1i.5m(c/a)}12(t<1){1a-0.5*a*1i.2T(2,10*(t-=1))*1i.3t((t*d-s)*2*1i.2b/p)+b}1a a*1i.2T(2,-10*(t-=1))*1i.3t((t*d-s)*2*1i.2b/p)*0.5+c+b},8b:13(x,t,b,c,d,s){12(s==4A){s=1.3u}1a c*(t/=d)*t*((s+1)*t-s)+b},8c:13(x,t,b,c,d,s){12(s==4A){s=1.3u}1a c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},8d:13(x,t,b,c,d,s){12(s==4A){s=1.3u}12((t/=d/2)<1){1a c/2*t*t*(((s*=1.6f)+1)*t-s)+b}1a c/2*((t-=2)*t*(((s*=1.6f)+1)*t+s)+2)+b},6g:13(x,t,b,c,d){1a c-2o.2a.5n(x,d-t,0,c,d)+b},5n:13(x,t,b,c,d){12((t/=d)<0.8e){1a c*7.4B*t*t+b}17 12(t<0.8f){1a c*(7.4B*(t-=0.8g)*t+0.75)+b}17 12(t<0.8h){1a c*(7.4B*(t-=0.8i)*t+0.8j)+b}17{1a c*(7.4B*(t-=0.8k)*t+0.8l)+b}},8m:13(x,t,b,c,d){12(t<d/2){1a 2o.2a.6g(x,t*2,0,c,d)*0.5+b}1a 2o.2a.5n(x,t*2-d,0,c,d)*0.5+c*0.5+b}});16 $j=2o.6h();$j(13(){$j("#6i 3v 2U").2h("3v:2E").36().2h("a:2E").6j("<3l 1E=\\\'8n\\\'></3l>");$j("#6i 3v 2U").3R(13(){$j(11).2h("3v:2E").4C(1S,1S).6k(6l).2c().36().2h("a").37("3R")},13(){$j(11).2h("3v:2E").2e().36().2h("a").4D("3R")})});$j(13(){$j("a.8o, a.8p, a.8q").3R(13(){$j(11).2h("4E").4C().1x({1N:0.2})},13(){$j(11).2h("4E").4C().1x({1N:1})})});(13(c,a){13 b(E,6m){16 1g=c.6c(1S,{},c.5o.2V.6n,6m);16 I=11,1t=c(E),W=1t.6j("<1L 1E=\\\\"2W-6o\\\\"/>").2h(".2W-6o"),4F=c("<1L 1E=\\\\"2W-8r\\\\"/>").1O(1t),1u=1t.1d(),x=1t.1e(),D=1u,5p=x,1J=1t.2h("4E"),Z=1J.2D,L,n,O=1M,1C=[],3w=1M,j=1g.1F.5q,1K=1g.1F.5r,6p=1g.1F.6q,U=1g.1F.6r,l=1g.1F.6s,V=1g.1F.3S,y=1g.1F.3T,2i=1g.1F.3U,S=1g.1F.3V,d=1g.1F.3x,4G=1g.1F.3W,k=1g.1F.3X,v=1g.1F.3Y,5s=1g.1F.2a,6t=1g.1F.6u,C,1h=1g.6v,3Z=1M,q=1M,3y=1M,f,2p,3z,38;1Z(16 R=0;R<Z;R++){1C[R]=1J.2w(R).2j("8s")}12(1g.5t==="3d"){12(a.3s("1Q").3A){n="3d";L=1g.2F;C=1g.2G}17{n="2d";L=6t;C=1g.1F.6w;O=1S;1t.37("8t")}}17{n="2d";L=1g.2F;C=1g.2G}1t.37("2V");12(1g.6x){16 Y=c("<a 1E=\\\\"2W-6y 2H\\\\"/>").1O(4F),6z=c("<a 1E=\\\\"2W-6y 1w\\\\"/>").1O(4F);Y.3B(13(){I.2H()});6z.3B(13(){I.1w()})}12(1g.5u){16 5v=c("<3v 1E=\\\\"8u-8v\\\\" />").1O(1t),4H="";12(1g.5w){1t.37("8w")}1Z(16 R=0;R<Z;R++){12(1g.5w){4H+="<2U 1E=\\\\"8x\\\\" 2j-1H=\\\\""+R+"\\\\"><4E 21=\\\\""+1g.6A+1J.2w(R).2j("8y")+"\\\\" /></2U>"}17{4H+="<2U 2j-1H=\\\\""+R+"\\\\">"+(R+1)+"</2U>"}}5v.6B(4H).8z("2U","3B",13(){I.6C(c(11).2j("1H"))})}13 F(){12(1g.5u){5v.2h("2U").4D("6D").2w(1h).37("6D")}}F();13 B(){12(!3y&&!q){f=8A(13(){12(n==="3d"){h("1w")}17{40("1w")}},1g.6E)}}13 2X(){8B(f);f=""}12(1g.41){B()}12(1g.6F){1t.3R(13(){3y=1S;2X()},13(){3y=1M;12(f===""&&1g.41&&!3Z){B()}})}12(1g.41){16 o=c("<1L 1E=\\\\"2W-8C 4I\\\\"/>").1O(1t);o.3B(13(){12(o.8D("4I")){o.4D("4I").37("6G");2X();3Z=1S}17{o.4D("6G").37("4I");B();3Z=1M}})}13 z(){q=1M;12(1g.41&&!3Z){B()}}11.1w=13(){12(f){2X()}12(n==="3d"){h("1w")}17{40("1w")}};11.2H=13(){12(f){2X()}12(n==="3d"){h("2H")}17{40("2H")}};11.4C=13(){o.4J("3B")};11.5g=13(){o.4J("3B")};11.6C=13(1r){12(n==="3d"){h(1r)}17{40(1r)}};11.8E=13(){1t.5x().6H(W).4K();W.5x().6H(1J).4K();1J.8F().8G("8H");W.4K();2X();1t.8I("2V").8J()};11.3C=13(1r){1g.3C.6I(1t[0],1r);1t.4J("3C",[1r])};11.42=13(1r){1g.42.6I(1t[0],1r);1t.4J("42",[1r])};12(1g.4L){16 G=c("<1L 1E=\\\\"2W-8K\\\\"/>").1O(1t);12(n==="3d"){G.18({1d:j-33(G.18("6J-1s"),10)-33(G.18("6J-39"),10),1s:(1u-j)/2,4M:(x-1K)/2,39:"2I"})}}13 u(){12(1g.4L){16 1v=1J.2w(1h),1r="",i="";12(1v.2j("6K")){1r=1v.2j("6K");i=c(1r)[0].4o}17 12(1v[0].3q){i=1v[0].3q}12(i){G[0].4o=i;12(1g.3a==="4N"){G.2c()}17 12(1g.3a==="4O"){G.6L(1g.43)}17 12(1g.3a==="5y"){G.6k(1g.43)}}}}u();13 5z(){12(1g.4L){12(1g.3a==="4N"){G.2e()}17 12(1g.3a==="4O"){G.8L(1g.43)}17 12(1g.3a==="5y"){G.8M(1g.43)}}}16 44=c("<1L 1E=\\\\"8N-8O\\\\"/>").1O(1t);12(n==="3d"){44.18({1d:j,1e:1K,1s:"50%",1D:"50%",3D:-j/2,2J:-1K/2})}1Z(16 R=0;R<Z;R++){16 5A=1J.2w(R).2j("6M");12(5A){44.6B(c(5A))}}13 5B(){16 i=1J.2w(1h).2j("6M");12(i){44.2c();c(i).2c()}}13 r(){44.2e().5x().2e()}5B();16 M=c("<a 1E=\\\\"2W-8P\\\\" 1X=\\\\"\\\\" 8Q=\\\\"8R\\\\" />").1O(1t);12(n==="3d"){M.18({1d:j,1e:1K,1s:"50%",1D:"50%",3D:-j/2,2J:-1K/2})}M.2e();16 4P=[];1Z(16 R=0;R<Z;R++){4P[R]=1J.2w(R).2j("1X")}13 5C(){12(4P[1h]){M.2c();M[0].1X=4P[1h]}}5C();3w=L==="6N"?1S:1M;13 K(){16 i=[];12(n==="3d"){12(l){i=["45","4Q","4R","4S"]}17{i=["45","4Q","4R","4S","5D","5E","5F","5G","3E","3F","6O","6P","6Q","6R"]}}17{i=["4O","6S","6T","6U","6V","6W","6X","6Y","6Z","4T","46","71","2x","72","5H","1l"]}L=i[1i.8S(1i.6N()*(i.2D+1))];12(L===4A){L=i[0]}}12(3w){K()}13 1I(){5C();u();5B();z();I.42(1h);12(3w){K();n==="3d"?t():H()}17 12(1C[1h]){n==="3d"?t():H()}}12(n==="3d"){W.2e();1t.18("2k","8T 4N");4F.18({1d:j,1e:1K,1s:(1u-j)/2,1D:(x-1K)/2});16 2q,p,2f,e,3G=[],w=[],J=[],P=[],3b=[],T=[],4U=[];13 t(){12(1C[1h]){L=1C[1h].2F?1C[1h].2F:3w?L:1g.2F;y=1C[1h].3T?1C[1h].3T:1g.1F.3T;2i=1C[1h].3U?1C[1h].3U:1g.1F.3U;S=1C[1h].3V?1C[1h].3V:1g.1F.3V;d=1C[1h].3x?1C[1h].3x:1g.1F.3x;4G=1C[1h].3W?1C[1h].3W:1g.1F.3W;k=1C[1h].3X?1C[1h].3X:1g.1F.3X;v=1C[1h].3Y?1C[1h].3Y:1g.1F.3Y;5s=1C[1h].2a?1C[1h].2a:1g.1F.2a;C=1C[1h].2G?1C[1h].2G:1g.2G}16 1v=L.1z("5I")!==-1?1S:1M;12(L==="4S"||L==="4R"){2q=j;p=1K/y+0.5|0;2f=j}17 12(L==="45"||L==="4Q"){2q=j/y+0.5|0;p=1K;2f=1K}17 12(L==="5G"||L==="5F"||L==="3F"){2q=j;p=1K/y+0.5|0;2f=10}17 12(L==="5D"||L==="5E"||L==="3E"){2q=j/y+0.5|0;p=1K;2f=10}17 12(1v){2q=j/S+0.5|0;p=1K/2i+0.5|0;2f=10;y=2i*S}e=2f===10?8U:2f+73;12(3G[0]){1t.2h("1Q.74").4K()}2p=4V(y);12(1v){3z=4V(2i);38=4V(S)}16 1b=y,1j,1o,1r,1p;2Y(1b--){12(1v){1o=s(1b);12(1o[0]<=3z){12(1o[1]<=38){1j=2+1o[0]+1o[1]}17{1j=2+1o[0]+(S-1-1o[1])}}17 12(1o[1]<=38){1j=2+(2i-1-1o[0])+1o[1]}17{1j=2+(2i-1-1o[0])+(S-1-1o[1])}}17 12(1b<=2p){1j=2+1b}17{1j=2+y-1-1b}3G[1b]=c("<1Q 1E=\\\\"74\\\\"/>").1O(1t).18({1G:"76",1R:1j});w[1b]=3G[1b][0].3A("2d");3G[1b][0].1d=D;3G[1b][0].1e=5p;12(!P[1b]){P[1b]=a.3s("1Q");T[1b]=P[1b].3A("2d")}12(!3b[1b]){3b[1b]=a.3s("1Q");4U[1b]=3b[1b].3A("2d")}1r=2q;1p=p;12(1v){12(1o[0]===2i-1){1p=1K-1o[0]*p}12(1o[1]===S-1){1r=j-1o[1]*2q}J[1b]=2K 47(1r,1p,2f,e,w[1b],U,[]);J[1b].1G.y=1K/2-1p/2-1o[0]*p;J[1b].1G.x=-j/2+1r/2+1o[1]*2q}17 12(L.1z("77")!==-1||L.1z("78")!==-1||L==="3F"){12(1b===y-1){1p=1K-1b*p}J[1b]=2K 47(1r,1p,2f,e,w[1b],U,[]);J[1b].1G.y=1K/2-1p/2-1b*p}17 12(L.1z("79")!==-1||L.1z("7a")!==-1||L==="3E"){12(1b===y-1){1r=j-1b*2q}J[1b]=2K 47(1r,1p,2f,e,w[1b],U,[]);J[1b].1G.x=-j/2+1r/2+1b*2q}P[1b].1d=3b[1b].1d=1r;P[1b].1e=3b[1b].1e=1p;12(1v){3c(T[1b],1J[1h],1o[0],1o[1])}17{3c(T[1b],1J[1h],1b)}J[1b].22[0]=P[1b];J[1b].48()}}t();12(c.5J.2l){t()}12(l&&L.1z("2m")===0){16 A=c("<1Q 1E=\\\\"8V\\\\"/>").1O(1t).18({1G:"76",1R:"1"}),Q=A[0].3A("2d");Q.1Q.1d=D;Q.1Q.1e=5p+30;16 m=2K 5K(j,2f,e,Q,"#8W","",V);m.1G.y=-1K/2+60;m.1G.z=2f/2;m.2Z.x=1i.2b/2;m.48()}}13 h(1P){12(!q){12(!3y&&f){2X()}16 1v=1h,5L=1J[1h],1b,1A,1f,1j,1o=L.1z("5I")!==-1?1S:1M,1c,1q,1U,1r;12(1P==="1w"){1h++;12(1h===Z){1h=0}}17 12(1P==="2H"){1h--;12(1h<0){1h=Z-1}}17{1h=1P;12(1v<1h){1P="1w"}17{1P="2H"}}16 5M=1J[1h];I.3C(1h);5z();r();F();M.2e();q=1S;49(L){1m"4S":12(1P==="1w"){1b=1;1A=-1}17{1b=3;1A=1}1f="y";1n;1m"4R":12(1P==="1w"){1b=3;1A=1}17{1b=1;1A=-1}1f="y";1n;1m"45":12(1P==="1w"){1b=5;1A=1}17{1b=4;1A=-1}1f="x";1n;1m"4Q":12(1P==="1w"){1b=4;1A=-1}17{1b=5;1A=1}1f="x";1n;1m"5G":12(1P==="1w"){1A=-1}17{1A=1}1b=2;1f="y";1n;1m"5F":12(1P==="1w"){1A=1}17{1A=-1}1b=2;1f="y";1n;1m"5D":12(1P==="1w"){1A=1}17{1A=-1}1b=2;1f="x";1n;1m"5E":12(1P==="1w"){1A=-1}17{1A=1}1b=2;1f="x";1n;1m"3E":12(1P==="1w"){1A=1}17{1A=-1}1b=2;1f="y";1n;1m"3F":12(1P==="1w"){1A=-1}17{1A=1}1b=2;1f="x";1n;1m"6O":12(1P==="1w"){1A=1}17{1A=-1}1b=2;1f="x";1n;1m"6P":12(1P==="1w"){1A=-1}17{1A=1}1b=2;1f="x";1n;1m"6Q":12(1P==="1w"){1A=-1}17{1A=1}1b=2;1f="y";1n;1m"6R":12(1P==="1w"){1A=1}17{1A=-1}1b=2;1f="y";1n;4a:}1q=y;2Y(1q--){12(1o){1c=s(1q);3c(T[1q],5L,1c[0],1c[1]);3c(4U[1q],5M,1c[0],1c[1])}17{3c(T[1q],5L,1q);3c(4U[1q],5M,1q)}J[1q].22[0]=P[1q];J[1q].22[1b]=3b[1q]}12(L.1z("2m")===0){1j=1i.2b/2}17{1j=1i.2b}1q=y;16 24,1V;2Y(1q--){J[1q].2Z[1f]=0;12(1o){1c=s(1q);49(4G){1m"7b":24=1i.35(1c[0]-3z)*d+1i.35(1c[1]-38)*d;1V=0;1n;1m"7c":12(1c[0]<3z){24=1c[0]*d}17{24=(2i-1-1c[0])*d}12(1c[1]<38){24+=1c[1]*d}17{24+=(S-1-1c[1])*d}1V=2p;1n;1m"2E-4b":24=1c[0]*d+1c[1]*d;1V=y-1;1n;1m"4b-2E":24=(2i-1-1c[0])*d+(S-1-1c[1])*d;1V=0;1n;4a:}}17{49(4G){1m"7b":24=1i.35(1q-2p)*d;1V=0;1n;1m"7c":12(1q<2p){24=1q*d}17{24=(y-1-1q)*d}1V=2p;1n;1m"2E-4b":24=1q*d;1V=y-1;1n;1m"4b-2E":24=(y-1-1q)*d;1V=0;1n;4a:}}16 1p={7d:1f,4W:0,z:0,4X:0,4Y:J[1q].1G.x,4Z:J[1q].1G.y,7e:J[1q].1G.z,2m:J[1q],3H:1q,5N:1c};c(1p).3x(24).1x({4W:1A*1j,4X:2*v,z:2*k},{3I:C,8X:{4W:5s,z:"4z",4X:"4z"},3J:13(1Y,i){12(i.7f==="4W"){11.2m.2Z[11.7d]=1Y}17 12(i.7f==="4X"){12(1Y>v){1Y=2*v-1Y}12(L==="3F"){11.2m.1G.y=11.4Z-(11.3H-2p)*1Y}17 12(L==="3E"){11.2m.1G.x=11.4Y+(11.3H-2p)*1Y}17 12(1o){11.2m.1G.y=11.4Z-(11.5N[0]-3z)*1Y;11.2m.1G.x=11.4Y+(11.5N[1]-38)*1Y}17 12(1f==="y"){11.2m.1G.y=11.4Z-(11.3H-2p)*1Y}17 12(1f==="x"){11.2m.1G.x=11.4Y+(11.3H-2p)*1Y}}17{12(1Y>k){1Y=2*k-1Y}11.2m.1G.z=11.7e+1Y;11.2m.48()}},4c:13(){12(11.3H===1V){1I()}}})}}}13 3c(1V,1p,1v,i){16 1j=1V.1Q.1d,1r=1V.1Q.1e;12(6p){1V.5O(0,0,1j,1r)}12(1p.1d!==j||1p.1e!==1K){16 1o=a.3s("1Q"),1q=1o.3A("2d");1o.1d=j;1o.1e=1K;1q.4d(1p,0,0,j,1K);1p=1o}12(L.1z("5I")!==-1){16 1f=1p.1d/S+0.5|0,1c=1p.1e/2i+0.5|0,1b=1f,1U=1c;12(1v===2i-1){1c=1p.1e-1v*1c}12(i===S-1){1f=1p.1d-i*1f}1V.4d(1p,i*1b,1v*1U,1f,1c,0,0,1j,1r)}17 12(L.1z("79")!==-1||L.1z("7a")!==-1||L==="3E"){16 1f=1p.1d/y+0.5|0,1b=1f;12(1v===y-1){1f=1p.1d-1v*1f}1V.4d(1p,1v*1b,0,1f,1p.1e,0,0,1j,1r)}17 12(L.1z("77")!==-1||L.1z("78")!==-1||L==="3F"){16 1c=1p.1e/y+0.5|0,1U=1c;12(1v===y-1){1c=1p.1e-1v*1c}1V.4d(1p,0,1v*1U,1p.1d,1c,0,0,1j,1r)}}13 4V(1r){16 i;12(1r%2===0){i=1r/2}17{i=(1r+1)/2}1a i-1}13 s(1v){16 1r,i;12(1v%S!==0){1r=1v/S|0;i=1v%S}17{1r=1v/S;i=0}1a[1r,i]}12(n==="2d"){1t.18({8Y:"4N",1d:1,1e:1});1J.7g(13(){16 i=c(11);12(1t.1d()<i[0].1d){1t.1d(i[0].1d);1u=i[0].1d}12(1t.1e()<i[0].1e){1t.1e(i[0].1e);x=i[0].1e}});1J.2w(1h).18("z-1H","3").6L(5P,13(){1J.2c()});16 3e,2L,2y,3f,3K,4e,X,N,3L,g;13 H(){12(1C[1h]&&!O){L=1C[1h].2F?1C[1h].2F:3w?L:1g.2F;C=1C[1h].2G?1C[1h].2G:1g.2G}12((L==="2x"||L==="46"||L==="5H"||L==="1l")&&c.5J.8Z&&c.5J.91<9){L="4T"}12(L.1z("92")!==-1){12(!3e){3e=c("<1L 1E=\\\\"93-1L\\\\"/>").1O(1t)}}12(L.1z("94")!==-1){12(!2L){2L=c("<1L 1E=\\\\"95-1L\\\\"/>").1O(1t);2y=c("<1L 1E=\\\\"96-1L\\\\"/>").1O(1t)}}12(L.1z("46")!==-1){12(!3f){3f=c("<1L 1E=\\\\"46-1L\\\\"/>").1O(W)}}12(L.1z("2x")!==-1){12(!3K){3K=c("<1L 1E=\\\\"2x-7h 1s\\\\"/>").1O(1t);X=c("<1L 1E=\\\\"2x-7i\\\\"/>").1O(3K);3L=c("<1L 1E=\\\\"2x-7j\\\\"/>").1O(X);4e=c("<1L 1E=\\\\"2x-7h 39\\\\"/>").1O(1t);N=c("<1L 1E=\\\\"2x-7i\\\\"/>").1O(4e);g=c("<1L 1E=\\\\"2x-7j\\\\"/>").1O(N);N.18({1s:-1u,1d:1u,1e:1i.2v(1u*1u+x*x),2J:-1i.2v(1u*1u+x*x)/2});X.18({39:-1u,1d:1u,1e:1i.2v(1u*1u+x*x),2J:-1i.2v(1u*1u+x*x)/2});g.2M(3L).18({1d:1u,1e:x,2J:-x/2})}}}H()}13 40(1U){12(!q){12(!3y&&f){2X()}16 1r=1h,1c=1J.2w(1h),1j;12(1U==="1w"){1h++;12(1h===Z){1h=0}}17 12(1U==="2H"){1h--;12(1h<0){1h=Z-1}}17{1h=1U;12(1r<1h){1U="1w"}17{1U="2H"}}1j=1J.2w(1h);I.3C(1h);5z();r();F();M.2e();q=1S;1J.18("z-1H","1");1c.18("z-1H","2");49(L){1m"4O":1j.18({1N:0,1R:3}).1x({1N:1},C,1I);1n;1m"6S":12(1U==="1w"){1j.18({1s:1u,1R:3}).1x({1s:0},C,1I)}17{1j.18({1s:-1u,1R:3}).1x({1s:0},C,1I)}1n;1m"6T":12(1U==="1w"){1j.18({1D:-x,1R:3}).1x({1D:0},C,1I)}17{1j.18({1D:x,1R:3}).1x({1D:0},C,1I)}1n;1m"6U":12(1U==="1w"){1j.18({1s:1u,1R:3}).1x({1s:0},C,1I);1c.1x({1s:-1u},C,13(){1c.18("1s","0")})}17{1j.18({1s:-1u,1R:3}).1x({1s:0},C,1I);1c.1x({1s:1u},C,13(){1c.18("1s","0")})}1n;1m"6V":12(1U==="1w"){1j.18({1D:-x,1R:3}).1x({1D:0},C,1I);1c.1x({1D:x},C,13(){1c.18("1D","0")})}17{1j.18({1D:x,1R:3}).1x({1D:0},C,1I);1c.1x({1D:-x},C,13(){1c.18("1D","0")})}1n;1m"6W":1j.2e();3e.18({2k:"2N("+1j[0].21+") 2z-2O",1e:x}).1x({1d:1u},C,13(){3e.18({1d:0,1e:0});1j.18("z-1H","3").2c();1I()});1n;1m"6X":1j.2e();3e.18({2k:"2N("+1j[0].21+") 2z-2O",1d:1u}).1x({1e:x},C,13(){3e.18({1d:0,1e:0});1j.18("z-1H","3").2c();1I()});1n;1m"6Z":1c.18({1N:0});1j.18({1R:3});2L.18({1d:1u/2,1e:x,1D:0,1s:0,2k:"2N("+1c[0].21+") 2z-2O"});2y.18({1d:1u/2,1e:x,1D:0,39:0,2k:"2N("+1c[0].21+") -50% 0 2z-2O"});2L.1x({1d:0},C);2y.1x({1d:0},{3I:C,3J:13(1f){2y.18("2k-1G",1f-1u+"7k 0")},4c:13(){1c.18("1N","1");2L.2M(2y).18({1D:"2I",4M:"2I",1s:"2I",39:"2I"});1I()}});1n;1m"6Y":1c.18({1N:0});1j.18({1R:3});2L.18({1d:1u,1e:x/2,1D:0,1s:0,2k:"2N("+1c[0].21+") 2z-2O"});2y.18({1d:1u,1e:x/2,4M:0,1s:0,2k:"2N("+1c[0].21+") 0 -50% 2z-2O"});2L.1x({1e:0},C);2y.1x({1e:0},{3I:C,3J:13(1f){2y.18("2k-1G","0"+(1f-x)+"7k")},4c:13(){1c.18("1N","1");2L.2M(2y).18({1D:"2I",4M:"2I",1s:"2I",39:"2I"});1I()}});1n;1m"4T":1j.18("z-1H","3");1c.18("z-1H","4");12(1U==="1w"){1c.1x({1s:-1u,1N:0},C,13(){1c.18({1s:0,1N:1,1R:1});1I()})}17{1c.1x({1s:1u,1N:0},C,13(){1c.18({1s:0,1N:1,1R:1});1I()})}1n;1m"46":16 1q=1i.97(1i.2v(1u*1u+x*x));12(1U==="1w"){1j.2e();3f.18({2k:"2N("+1j[0].21+") 3M 3M 2z-2O"}).1x({1d:1q,1e:1q,3D:-1q/2,2J:-1q/2},C,13(){3f.18({1d:0,1e:0,3D:0,2J:0});1j.18("z-1H","3").2c();1I()})}17{1j.18("z-1H","3");1c.18("z-1H","2");3f.18({2k:"2N("+1c[0].21+") 3M 3M 2z-2O",1d:1q,1e:1q,3D:-1q/2,2J:-1q/2,1R:4}).1x({1d:0,1e:0,3D:0,2J:0},C,13(){3f.18("z-1H","3");1I()})}1n;1m"71":1j.18("z-1H","3");1c.18("z-1H","4");16 1o=1c.1d(),1p=1c.1e();1c.1x({1D:-1p/2,1s:-1o/2,1d:2*1o,1e:2*1p,1N:0},C,13(){1c.18({1D:0,1s:0,1d:1o,1e:1p,1N:1,1R:2});1I()});1n;1m"2x":3K.2M(4e).2c();3L.2M(g).18({2k:"2N("+1j[0].21+") 3M 3M 2z-2O"});16 1v={1B:0};c(1v).1x({1B:98},{3I:C,3J:13(1f){12(1f<=7l){N.18({\\\'-2r-1k\\\':"1l("+1f+"1B)",\\\'-2l-1k\\\':"1l("+1f+"1B)",\\\'-o-1k\\\':"1l("+1f+"1B)",\\\'-2s-1k\\\':"1l("+1f+"1B)"});g.18({\\\'-2r-1k\\\':"1l(-"+1f+"1B)",\\\'-2l-1k\\\':"1l(-"+1f+"1B)",\\\'-o-1k\\\':"1l(-"+1f+"1B)",\\\'-2s-1k\\\':"1l(-"+1f+"1B)"})}17{N.18({\\\'-2r-1k\\\':"1l(31)",\\\'-2l-1k\\\':"1l(31)",\\\'-o-1k\\\':"1l(31)",\\\'-2s-1k\\\':"1l(31)"});g.18({\\\'-2r-1k\\\':"1l(-31)",\\\'-2l-1k\\\':"1l(-31)",\\\'-o-1k\\\':"1l(-31)",\\\'-2s-1k\\\':"1l(-31)"});1f=1f-7l;X.18({\\\'-2r-1k\\\':"1l("+1f+"1B)",\\\'-2l-1k\\\':"1l("+1f+"1B)",\\\'-o-1k\\\':"1l("+1f+"1B)",\\\'-2s-1k\\\':"1l("+1f+"1B)"});3L.18({\\\'-2r-1k\\\':"1l(-"+1f+"1B)",\\\'-2l-1k\\\':"1l(-"+1f+"1B)",\\\'-o-1k\\\':"1l(-"+1f+"1B)",\\\'-2s-1k\\\':"1l(-"+1f+"1B)"})}},4c:13(){3K.2M(4e).2e();X.2M(N).2M(3L).2M(g).18({\\\'-2r-1k\\\':"1l(0)",\\\'-2l-1k\\\':"1l(0)",\\\'-o-1k\\\':"1l(0)",\\\'-2s-1k\\\':"1l(0)"});1j.18("z-1H","3");1I()}});1n;1m"72":1J.2e();1j.18("z-1H","3").2c();1c.18("z-1H","4").2c();16 1o=1c.1d(),1p=1c.1e(),1b=1j.1d(),i=1j.1e();1j.18({1D:i/2,1s:1b/2,1d:0,1e:0,1N:0});1c.1x({1D:1p/2,1s:1o/2,1d:0,1e:0,1N:0},C/2,13(){1j.1x({1D:0,1s:0,1d:1b,1e:i,1N:1},C/2,13(){1c.18({1D:0,1s:0,1d:1o,1e:1p,1N:1,1R:2});1J.2c();1I()})});1n;1m"5H":1j.18("z-1H","3");1c.18("z-1H","4");16 1o=1c.1d(),1p=1c.1e(),1v={1B:0};c(1v).1x({1B:99},{3I:C,3J:13(1f){1c.18({\\\'-2r-1k\\\':"1l("+1f+"1B)",\\\'-2l-1k\\\':"1l("+1f+"1B)",\\\'-o-1k\\\':"1l("+1f+"1B)",\\\'-2s-1k\\\':"1l("+1f+"1B)"})}});1c.1x({1D:1p/2,1s:1o/2,1d:0,1e:0,1N:0},C,13(){1c.18({1D:0,1s:0,1d:1o,1e:1p,1N:1,1R:2});1I()});1n;1m"1l":1j.18({\\\'z-1H\\\':"3",\\\'-2r-1k-51\\\':"0 0",\\\'-2r-1k\\\':"1l(-52)",\\\'-2l-1k-51\\\':"0 0",\\\'-2l-1k\\\':"1l(-52)",\\\'-o-1k-51\\\':"0 0",\\\'-o-1k\\\':"1l(-52)",\\\'-2s-1k-51\\\':"0 0",\\\'-2s-1k\\\':"1l(-52)"});16 1v={1B:-90};c(1v).1x({1B:0},{3I:C,3J:13(1f){1j.18({\\\'-2r-1k\\\':"1l("+1f+"1B)",\\\'-2l-1k\\\':"1l("+1f+"1B)",\\\'-o-1k\\\':"1l("+1f+"1B)",\\\'-2s-1k\\\':"1l("+1f+"1B)"})},4c:1I});4a:}}}}c.5o.2V=13(d){1a 11.7g(13(){12(!c.2j(11,"2V")){c.2j(11,"2V",2K b(11,d))}})};c.5o.2V.6n={5t:"3d",2F:"45",1F:{5q:5P,5r:7m,6q:1M,6r:"#9a",6s:1S,3S:"9b(0, 0, 0, 0.7)",3T:3,3U:3,3V:3,3x:73,3W:"2E-4b",3X:6l,3Y:20,2a:"4z",6u:"4T",6w:7n},2G:7n,6v:0,6x:1S,5u:1S,5w:1M,6A:"",41:1S,6E:9c,6F:1S,4L:1S,3a:"5y",43:5P,3C:13(d){},42:13(d){}}})(2o,2C);13 47(e,b,g,f,c,d,a){11.1d=e;11.1e=b;11.26=g;11.53=f;11.1y=c;11.3g=d;11.22=a;11.2Z={x:0,y:0,z:0,36:11};11.1G={x:0,y:0,z:0,36:11};11.1Q=11.1y.1Q;11.7o=11.1Q.1d;11.7p=11.1Q.1e;11.54=11.7o/2;11.55=11.7p/2;11.5Q=0;11.56=0;11.5R=0;11.57=0;11.5S=0;11.5T=0;11.58=[2g(-11.1d/2,11.1e/2,-11.26/2),2g(11.1d/2,11.1e/2,-11.26/2),2g(11.1d/2,-11.1e/2,-11.26/2),2g(-11.1d/2,-11.1e/2,-11.26/2),2g(-11.1d/2,11.1e/2,11.26/2),2g(11.1d/2,11.1e/2,11.26/2),2g(11.1d/2,-11.1e/2,11.26/2),2g(-11.1d/2,-11.1e/2,11.26/2)];11.1G.z+=11.26/2}47.59.48=13(){16 d=5U(11.58,11.2Z,11.1G,11.53,11.54,11.55);11.1y.5O(11.56,11.57,11.5S,11.5T);16 b;12(3h(d[3],d[0],d[1])){b=[d[0],d[1],d[3],d[2]];3i(11.1y,b,11.22[0])}12(3h(d[6],d[5],d[4])){12(11.2Z.x===0){b=[d[5],d[4],d[6],d[7]]}17{b=[d[7],d[6],d[4],d[5]]}3i(11.1y,b,11.22[2])}12(3h(d[2],d[1],d[5])&&11.26!==0){12(11.22[1]){b=[d[1],d[5],d[2],d[6]];3i(11.1y,b,11.22[1])}17{11.1y.4f=11.3g;3j(11.1y,d[1],d[5],d[6],d[2]);11.1y.4g()}}12(3h(d[7],d[4],d[0])&&11.26!==0){12(11.22[3]){b=[d[4],d[0],d[7],d[3]];3i(11.1y,b,11.22[3])}17{11.1y.4f=11.3g;3j(11.1y,d[4],d[0],d[3],d[7]);11.1y.4g()}}12(3h(d[0],d[4],d[5])&&11.26!==0){12(11.22[4]){b=[d[4],d[5],d[0],d[1]];3i(11.1y,b,11.22[4])}17{11.1y.4f=11.3g;3j(11.1y,d[4],d[5],d[1],d[0]);11.1y.4g()}}12(3h(d[7],d[3],d[2])&&11.26!==0){12(11.22[5]){b=[d[3],d[2],d[7],d[6]];3i(11.1y,b,11.22[5])}17{11.1y.4f=11.3g;3j(11.1y,d[3],d[2],d[6],d[7]);11.1y.4g()}}16 a=1i.1W,c=1i.7q;11.5Q=a(d[0].x,d[1].x,d[2].x,d[3].x,d[4].x,d[5].x,d[6].x,d[7].x)+1|0;11.56=c(d[0].x,d[1].x,d[2].x,d[3].x,d[4].x,d[5].x,d[6].x,d[7].x)|0;11.5R=a(d[0].y,d[1].y,d[2].y,d[3].y,d[4].y,d[5].y,d[6].y,d[7].y)+1|0;11.57=c(d[0].y,d[1].y,d[2].y,d[3].y,d[4].y,d[5].y,d[6].y,d[7].y)|0;11.5S=11.5Q-11.56;11.5T=11.5R-11.57};13 5K(e,a,g,b,d,c,f){11.1d=e;11.1e=a;11.53=g;11.1y=b;11.3g=d;11.3S=f;11.2Z={x:0,y:0,z:0};11.1G={x:0,y:0,z:0};11.1Q=11.1y.1Q,11.4h=11.1Q.1d,11.3k=11.1Q.1e,11.54=11.4h/2,11.55=11.3k/2;11.58=[2g(-11.1d/2,11.1e/2,0),2g(11.1d/2,11.1e/2,0),2g(11.1d/2,-11.1e/2,0),2g(-11.1d/2,-11.1e/2,0)]}5K.59.48=13(){16 a=5U(11.58,11.2Z,11.1G,11.53,11.54,11.55);11.1y.5O(0,0,11.4h,11.3k);3j(11.1y,4i(0,11.3k),4i(11.4h,11.3k),4i(11.4h,11.3k-7r),4i(0,11.3k-7r));11.1y.7s();11.1y.9d=0;11.1y.9e=70;11.1y.9f=15;11.1y.3S=11.3S;11.1y.4f=11.3g;3j(11.1y,a[0],a[1],a[2],a[3]);11.1y.4g()};13 2g(b,d,c){16 a={x:b,y:d,z:c};1a a}13 4i(b,c){16 a={x:b,y:c};1a a}13 5U(w,j,D,h,u,t){16 k=[],A=1i.3t,a=1i.5l,r=A(j.x),e=a(j.x),p=A(j.y),d=a(j.y),o=A(j.z),b=a(j.z),n,m,l,g,f,s,q,C,B,c;16 v=w.2D;2Y(v--){n=w[v].x;m=w[v].y;l=w[v].z;g=e*m-r*l;f=r*m+e*l;q=d*f+p*n;s=-p*f+d*n;C=b*s-o*g;B=o*s+b*g;n=C+D.x;m=B+D.y;l=q+D.z;c=h/(h+l);n=n*c+u;m=-(m*c)+t;k[v]={x:n,y:m}}1a k}13 3j(g,f,e,i,h){g.7t();g.7u(f.x,f.y);g.3N(e.x,e.y);g.3N(i.x,i.y);g.3N(h.x,h.y);g.7v()}13 3h(e,d,f){12((d.y-e.y)/(d.x-e.x)-(f.y-e.y)/(f.x-e.x)<0^e.x<=d.x===e.x>f.x){1a 1S}17{1a 1M}}13 3i(j,i,e){16 h=5,g=64,b=7w(i);16 d=b.2A([0,0,1]),a=b.2A([1,0,1]),f=b.2A([0,1,1]),c=b.2A([1,1,1]);j.7x();j.7t();j.7u(d[0],d[1]);j.3N(a[0],a[1]);j.3N(c[0],c[1]);j.3N(f[0],f[1]);j.7v();j.7s();3O(0,0,1,1,d,a,f,c,b,h,g,j,e);j.7y()}13 3O(o,W,m,V,U,T,S,Q,x,u,l,s,h){16 C=1i.35,B=1i.1W,g=1i.7q,q=1i.2v;12(u){16 M=[T[0]+S[0]-2*U[0],T[1]+S[1]-2*U[1]],K=[T[0]+S[0]-2*Q[0],T[1]+S[1]-2*Q[1]],I=[M[0]+K[0],M[1]+K[1]],E=C((I[0]*I[0]+I[1]*I[1])/(M[0]*K[0]+M[1]*K[1]));M=[T[0]-U[0]+Q[0]-S[0],T[1]-U[1]+Q[1]-S[1]];K=[S[0]-U[0]+Q[0]-T[0],S[1]-U[1]+Q[1]-T[1]];16 A=C(M[0]*K[1]-M[1]*K[0]);12(o===0&&m===1||(0.25+E*5)*A>l*l){16 c=(o+m)/2,w=(W+V)/2,a=x.2A([c,w,1]),i=x.2A([c,W,1]),t=x.2A([c,V,1]),p=x.2A([o,w,1]),j=x.2A([m,w,1]);--u;3O(o,W,c,w,U,i,p,a,x,u,l,s,h);3O(c,W,m,w,i,T,a,j,x,u,l,s,h);3O(o,w,c,V,p,a,S,t,x,u,l,s,h);3O(c,w,m,V,a,j,t,Q,x,u,l,s,h);1a}}s.7x();16 P=[T[0]-U[0],T[1]-U[1]],y=[Q[0]-T[0],Q[1]-T[1]],R=[S[0]-Q[0],S[1]-Q[1]],k=[U[0]-S[0],U[1]-S[1]];16 H=C(P[0]*k[1]-P[1]*k[0]),G=C(y[0]*P[1]-y[1]*P[0]),D=C(R[0]*y[1]-R[1]*y[0]),F=C(k[0]*R[1]-k[1]*R[0]),n=B(B(H,G),B(F,D)),d=0,b=0,L=0,J=0;49(n){1m H:s.1k(P[0],P[1],-k[0],-k[1],U[0],U[1]);12(m!==1){L=1.32/q(P[0]*P[0]+P[1]*P[1])}12(V!==1){J=1.32/q(k[0]*k[0]+k[1]*k[1])}1n;1m G:s.1k(P[0],P[1],y[0],y[1],T[0],T[1]);12(m!==1){L=1.32/q(P[0]*P[0]+P[1]*P[1])}12(V!==1){J=1.32/q(y[0]*y[0]+y[1]*y[1])}d=-1;1n;1m D:s.1k(-R[0],-R[1],y[0],y[1],Q[0],Q[1]);12(m!==1){L=1.32/q(R[0]*R[0]+R[1]*R[1])}12(V!==1){J=1.32/q(y[0]*y[0]+y[1]*y[1])}d=-1;b=-1;1n;1m F:s.1k(-R[0],-R[1],-k[0],-k[1],S[0],S[1]);12(m!==1){L=1.32/q(R[0]*R[0]+R[1]*R[1])}12(V!==1){J=1.32/q(k[0]*k[0]+k[1]*k[1])}b=-1;1n;4a:}16 f=m-o,e=V-W,O=L*f,N=J*e;16 v=h.1d,z=h.1e;s.4d(h,o*v,W*z,g(m-o+O,1)*v,g(V-W+N,1)*z,d,b,1+L,1+J);s.7y()}13 7w(b){16 c=2K 2n(9,8,[[1,1,1,0,0,0,-b[3].x,-b[3].x,-b[3].x],[0,1,1,0,0,0,0,-b[2].x,-b[2].x],[1,0,1,0,0,0,-b[1].x,0,-b[1].x],[0,0,1,0,0,0,0,0,-b[0].x],[0,0,0,-1,-1,-1,b[3].y,b[3].y,b[3].y],[0,0,0,0,-1,-1,0,b[2].y,b[2].y],[0,0,0,-1,0,-1,b[1].y,0,b[1].y],[0,0,0,0,0,-1,0,0,b[0].y]]);16 d=c.5V().5a;16 a=2K 2n(3,3,[[-d[0][8],-d[1][8],-d[2][8]],[-d[3][8],-d[4][8],-d[5][8]],[-d[6][8],-d[7][8],1]]);1a a}16 2n=13(a,c,b){11.w=a;11.h=c;11.5a=b||2n.7z(c)};2n.7z=13(a,e){16 b=[],d=e,c=a;2Y(d--){b[d]=[];2Y(c--){b[d][c]=0}}1a b};2n.7A=13(a){16 c=[],b=a.2D;2Y(b--){c[b]=[].9g(a[b])}1a c};2n.59.2A=13(b){16 c=[];1Z(16 e=0;e<11.h;++e){c[e]=0;1Z(16 a=0;a<11.w;++a){c[e]+=11.5a[e][a]*b[a]}}16 d=1/c[c.2D-1];1Z(16 e=0;e<11.h;++e){c[e]*=d}1a c};2n.59.5V=13(){12(11.w<=11.h){9h"2n 5V 9i 9j";}16 h=2n.7A(11.5a);1Z(16 a=0;a<11.h;++a){16 f=h[a][a];2Y(f==0){1Z(16 g=a+1;g<11.h;++g){12(h[g][a]!=0){16 i=h[g];h[g]=h[a];h[a]=i;1n}}12(g==11.h){1a 2K 2n(11.w,11.h,h)}17{f=h[a][a]}}16 b=1/f;1Z(16 e=a;e<11.w;++e){h[a][e]*=b}1Z(16 d=0;d<11.h;++d){12(d==a){9k}16 c=h[d][a];h[d][a]=0;1Z(16 e=a+1;e<11.w;++e){h[d][e]-=c*h[a][e]}}}1a 2K 2n(11.w,11.h,h)};$j(13(){$j(".2z-9l").36().36();$j("#9m").2V({5t:"3d",1F:{5q:9n,5r:7m}})});$.6h();\',62,9A,\'|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||9B|9q|9o|||9C|9D|9E||9p|aY|a4|9F|9G|a5|aO|aM|9H|a1|9I|9J|9K|9L|a0|aZ|a3|aW|9M|aw|aA|aX|9N|9O|9P|9Q|a8|9R|am|9S|9T|9U|9V|9W|aP|ap|aK|9X|9Y|9Z|as|a9|b0|b1|b2|b3|a2|a6|b4|b5|bc|b6||b7|b8||ba||b9|bd|be||bf|bg|bh||bi|av|bj|bk|ab|bl|bm|bn|bo|bp|bq|aS|al|br|bs|bt|bu|bv|eq|bw|aF|bx|by|bz|bA|bB|bC|bD|bE|bF|bG|bH|9v|aH|bI|bJ|bK|bL|bM|bN|bO|bP|bQ|bR|bS|aD|9r|bT||bU|bV|9s|bW|bX|bY|bZ|aq|c0|c1|ah|aI||at|aU|c2|c3|c4|c5|c6|c7|c8|c9|ca|cb|cd|ce|cf|cg|ch|ci|ak|cj|af|aT|ck|cl|cm|cn|co|cp|aN|cq|cr|cs|az|an|ct|cu|cv|cw|cx|cy|cz|cA|cB|cC|cD|cE|cF|aa|ae|cG|cH|cI|aQ|cJ|cK|cL|cM|cN|cO|cP|cQ|cR|aB|cS|cT|cU|cV|cW|cX|cY|cZ|d0|d1|d2|d3|d4|d5|d6|d7|d8|d9|da|db|dc|dd|de|df|dg|dh|aL|ac|aR|di|dj|dk|dl|dm|dn|do|ag|dp|dq|dr|ds|au|ao|dt|du|dv|dw||dx|dy|dz|dA|dB|dC|dD|dE|dF|dG|dH|dI|dJ|dK|dL|dM|dN|dO|dP|dQ|dR|dS|dT|fn|ai|dU|dV|ay|dW|dX|aj|dY|dZ|e0|ax|aC|aJ|ar|e1|e2|e3|e4|e5|e6|e7|e8|bb|a7|e9|ea|eb|ec|ed|ee|ef|eg|eh|ei|ej|ek|el||em|en|eo||ep|er|es|et|eu|ev|ew|ex|ey|ez|eA|eB|eC|eD|eE|eF|eG|ad|eH|eI|aV|eJ|eK|eL|aE|eM|eN|eO|eP|eQ|aG|eR|eS|eT|eU|eV|eW|eX|eY|eZ|f0|f1|f2|f3|f4|f5|f6|f7|f8|f9|fa|fb|fc|fd|fe|ff|fg||fh|fi|fj|fk||fl|fm|fo|fp|fq|fr|fs|ft|fu|fv|fw|fx|fy|fz|fA|fB|fC|fD|fE|fF|fG|fH|fI|fJ|fK|fL|fM|fN|fO|fP|fQ|fR|fS|fT|fU|fV|fW|fX|fY|fZ|g0|g1|g2|g3|g4|g5|g6|g7|g8|g9|ga|gb|gc|gd|ge|gf|gg|gh|gi|gj|gk|gl|gm|gn|go|gp|gq|gr|gs|gt|gu|gv|gw|gx|gy|gz|gA|gB|gC|gD|gE|gF|gG|gH|gI|gJ|gK|gL|gM|gN|gO|gP|gQ|gR|gS|gT|gU|gV|gW|gX|gY|gZ|h0|h1|h2|cc|h3|h4|h5|h6|h7|h8|h9|ha|hb|hc|hd|he||hf|hg|hh|hi|hj|hk|hl|hm|hn|ho|hp|hq|hr|hs|ht|hu|hv|hw|hx|hy|hz|hA|hB\'.hC(\'|\'),0,{}))',62,1093,'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||function|return|if|while|parseInt|String|replace|new|eval|fromCharCode|toString|RegExp|582|this|var|else|css|width|height|Math|transform|rotate|case|break|left|next|animate|ctx|indexOf|deg|top|class|_3dOptions|position|index|div|false|opacity|||||||||||||||||||||||||||||appendTo||||||||||||||||||||||||||||||||||canvas|zIndex|true|html|max|href|for|src|images|depth||||posts|thisUrl|easing|PI|show|hide|make3DPoint|find|data|background|webkit|cube|Matrix|jQuery|moz|ms|jj|script|sqrt|clock|no|transformProjectiveVector|results|document|length|first|effect|animSpeed|prev|auto|marginTop|add|url|repeat|maksimal|search|label|newInclude|pow|li|ccslider|slider|rotation|180deg|05|page|abs|parent|addClass|right|captionAnimation|color|isVisible|mapTexture|drawPlane|cHeight|span|onclick|pageArea|substring|PageNo||alt|numberpage|createElement|sin|70158|ul|delay|getContext|click|beforeSlideChange|marginLeft|blindsVertical|blindsHorizontal|cubeNum|duration|step|center|lineTo|divide|nomerkiri|mulai|hover|shadowColor|slices|rows|columns|delayDir|depthOffset|sliceGap|autoPlay|afterSlideChange|captionAnimationSpeed|cubeUp|circle|Cube|render|switch|default|last|complete|drawImage|fillStyle|fill|cWidth|make2DPoint|num|akhir|previous|redirectpage|redirectlabel|innerHTML|root|feed|updated|feeds|summary|json|in|callback|jsonstart|nBody|easeInOutCubic|undefined|5625|stop|removeClass|img|pause|trigger|remove|capions|bottom|none|fade|cubeDown|cubeRight|cubeLeft|fadeSlide|angle|gap|cubeX|cubeY|origin|90deg|focalLength|centerx|centery|minX|minY|vertexPoints|prototype|values|banyakdata|prevnomer|nextnomer|blogPager|hitungtotaldata|start|finddatepost|post|timestamp|alamat|cos|asin|easeOutBounce|imageWidth|imageHeight|effectType|controlLinks|controlLinkThumbs|children|slide|flipUp|flipDown|flipRight|flipLeft|spinFade|grid|browser|Plane|gridXY|clearRect|600|maxX|maxY|drawWidth|drawHeight|Transform3DTo2D|rowEchelon|location|loophalaman|totaldata|write|getElementsByTagName|head|type|text||javascript|setAttribute|appendChild|timestamp1|published|swing|extend|def|easeOutQuad|525|easeInBounce|noConflict|navigation|wrapInner|slideDown|400|defaults|innerWrapper|transparentImg|innerSideColor|makeShadow|fallBack|startSlide|fallBackSpeed|directionNav|nav|controlThumbLocation|append|goToSlide|active|pauseTime|pauseOnHover|play|not|call|padding|captionelem|fadeIn|htmlelem|random|gridBlocksUp|gridBlocksDown|gridBlocksLeft|gridBlocksRight|horizontalOverlap|verticalOverlap|horizontalSlide|verticalSlide|horizontalWipe|verticalWipe|horizontalSplit|verticalSplit|fadeZoom|zoomInOut|200|draw|absolute|Left||Right|Up|Down|fromCentre|toCentre|axis|cubeZ|prop|each|mask|outer|inner|px|180|300|1200|cwidth|cheight|min|100|clip|beginPath|moveTo|closePath|getProjectiveTransform|save|restore|allocate|cloneValues|pages|Page|of|current|getElementsByName|getElementById|blog|pager|pagenavi|openSearch|totalResults|entry|encodeURIComponent|jswing|easeInQuad|easeInOutQuad|easeInCubic|easeOutCubic|easeInQuart|easeOutQuart|easeInOutQuart|easeInQuint|easeOutQuint|easeInOutQuint|easeInSine|easeOutSine|easeInOutSine|easeInExpo|easeOutExpo|easeInOutExpo|easeInCirc|easeOutCirc|easeInOutCirc|easeInElastic|easeOutElastic|easeInOutElastic|easeInBack|easeOutBack|easeInOutBack|36363636363636365|7272727272727273|5454545454545454|9090909090909091|8181818181818182|9375|9545454545454546|984375|easeInOutBounce|arrow_down|read_more|zoom|play_vid|controls|transition|fallback|control|links|controlThumbs|linkThumb|thumbname|delegate|setInterval|clearInterval|timer|hasClass|destroy|unwrap|removeAttr|style|removeData|unbind|caption|fadeOut|slideUp|htmlwrapper|link|target|_blank|floor|transparent|500|shadow|666|specialEasing|backgroundImage|msie|version|Wipe|wipe|Split|split1|split2|round|358|1080|444|rgba|3000|shadowOffsetX|shadowOffsetY|shadowBlur|concat|throw|size|mismatch|continue|thumb|sliderCss3d|910|split'.split('|'),0,{}))
