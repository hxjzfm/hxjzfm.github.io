var rule = {
    title:'蚂蚁影视',
    host:'https://www.4kvcd.com',
    // homeUrl:'/',
    url:'/fyclass/index_fypage_______.html',
    searchUrl:'/index.php?s=vod-search-wd-**-p-fypage.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_name:'电影&电视剧&综艺&动漫&纪录片&国产&香港&台湾&韩国&日本&欧美&海外',
    class_url:'mov&tv&fun&cartoon&jilupian&guocanju&xianggangju&taiwanju&hanguoju&ribenju&oumeiju&haiwaiju',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.module-items;.module-poster-item;a&&title;img&&data-original;.module-item-note&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.module-poster-item;a&&title;img&&data-original;.module-item-note&&Text;a&&href',
    二级:{"title":"h1&&Text;.module-info-tag-link:eq(2)&&Text","img":".ls-is-cached.lazy.lazyload&&data-original","desc":".module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(2)&&.module-info-item-content&&Text;.module-info-content&&.module-info-item:eq(1)&&.module-info-item-content&&Text","content":".module-info-introduction-content&&Text","tabs":".module-tab-items-box:eq(0)&&.module-tab-item","lists":".module-list:eq(#id)&&.module-play-list-content a"},
    搜索:'.module-card-item.module-item;.module-card-item-title&&Text;img&&data-original;.module-item-note&&Text;a.play-btn-o&&href',
}
