var rule={
    title:'���涯��',
    host:'https://www.iyxdm.one/index.html',
    // homeUrl:'/',
    url:'/s/fyfilter/page/fypage.html',
	filterable:1,//�Ƿ����÷���ɸѡ,
	filter_url:'{{fl.cateId}}',
	filter: {"dianying":[{"key":"cateId","name":"����","value":[{"n":"ȫ��","v":"dianying"},{"n":"����Ƭ","v":"dongzuopian"},{"n":"ϲ��Ƭ","v":"xijupian"},{"n":"����Ƭ","v":"aiqingpian"},{"n":"�ƻ�Ƭ","v":"kehuanpian"},{"n":"����Ƭ","v":"yanqingpian"},{"n":"�ֲ�Ƭ","v":"kongbupian"},{"n":"����Ƭ","v":"juqingpian"},{"n":"ս��Ƭ","v":"zhanzhengpian"}]}],"lianxuju":[{"key":"cateId","name":"����","value":[{"n":"ȫ��","v":"lianxuju"},{"n":"������","v":"guochanju"},{"n":"��̨��","v":"gangtaiju"},{"n":"�պ���","v":"rihanju"},{"n":"ŷ����","v":"oumeiju"},{"n":"������","v":"qitaju"}]}]},
	filter_def:{
		dianying:{cateId:'dianying'},
		lianxuju:{cateId:'lianxuju'},
		zongyi:{cateId:'zongyi'},
		dongman:{cateId:'dongman'}
	},
    searchUrl:'/vodsearch/-------------.html?wd=**&submit=',
    searchable:2,//�Ƿ�����ȫ������,
    quickSearch:0,//�Ƿ����ÿ�������,
    headers:{//��վ������ͷ,����֧�����е�,����ua��cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_parse:'nav ul li;a&&Text;a&&href;.*/(.*?)\.html',
	cate_exclude:'ר��',
    play_parse:true,
    lazy:'',
    limit:6,
    �Ƽ�:'.show;ul&&li;*;*;*;*',
    double:true, // �Ƽ������Ƿ�˫�㶨λ
    һ��:'.show&&ul&&li;a&&title;img&&src;.score&&Text;a&&href',
    // ����:{"title":"h1&&Text;.info&&ul&&p&&Text","img":"img&&src","desc":".info&&ul&&p:eq(-2)&&Text;.info&&ul&&p:eq(-1)&&Text;.info&&ul&&p:eq(0)&&Text;.info&&ul&&p:eq(1)&&Text;.info&&ul&&p:eq(2)&&Text;.info&&ul&&p:eq(3)&&Text","content":".text&&Text","tabs":".play&&span","lists":".playlist&&ul:eq(#id) li"},
    ����:{
	    "title":"h1&&Text;.info&&ul&&p&&Text",
	    "img":"img&&src",
	    "desc":";;;.info ul li:eq(0)&&Text;.info ul li:eq(1)&&Text;.info&&ul&&p:eq(3)&&Text",
	    // "content":".text p&&Text",
	    "content":".text&&Text",
	    "tabs":".play&&span",
	    "lists":".playlist&&ul:eq(#id) li"
	},
    ����:'*',
    // ����:'*;*;*;*;*',
}