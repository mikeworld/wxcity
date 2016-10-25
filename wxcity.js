/*调用方法
***   HTML   ***
 <span id="citylist">
 地区标签:
 <select class="prov"  >
 </select>
 <select class="city"  ></select>
 </span>

***   Javascript代码   ***
$(function(){
    $("#citylist").initcity({
        provalue:'广东',
        cityvalue:'深圳'
    });
});
*/

; (function ($) {
    $.fn.extend({
        "initcity": function (settings) {
            var selectid = this.selector;
            var selectprov = selectid + " .prov";  //省的select
            var selectcity = selectid + " .city";  //市的select
            //参数
            var sysParas = {
                provalue: null,    //省值
                cityvalue: null    //市值
            };
            //赋值
            $.extend(sysParas, settings);

            //获取下拉列表数据
            var provcitylist = getOptionData();

            $.each(eval(provcitylist), function (i, item) {
                $(selectprov).append("<option value='" + item.n + "' >" + item.n + "</option>");
            });

            //选择省下拉触发
            $(selectprov).change(function () {
                //获取省下拉选择的选中下标
                var provindex = $('option:selected', selectprov).index()

                $(selectcity).empty();
                $.each(eval(provcitylist)[provindex].citylist, function (i, item) {
                    $(selectcity).append("<option value='" + item.n + "' >" + item.n + "</option>");
                });
            });

            //绑定selectprov
            if (sysParas.provalue != null) {
                $(selectprov).val(sysParas.provalue);
            };

            //刷新selectcity
            $(selectprov).change();

            //绑定selectcity
            if (sysParas.cityvalue != null) {
                $(selectcity).val(sysParas.cityvalue);
            };

        }
    });


    function getOptionData() {
        var provcitylist = [
            {
                "n": '全部',
                citylist: [{ "n": ' 全部' }]
            }, {
                "n": '安徽',
                citylist: [{ "n": '安庆' }, { "n": '蚌埠' }, { "n": '亳州' }, { "n": '巢湖' }, { "n": '滁州' }, { "n": '池州' }, { "n": '阜阳' }, { "n": '淮北' }, { "n": '合肥' }, { "n": '淮南' }, { "n": '黄山' }, { "n": '六安' }, { "n": '马鞍山' }, { "n": '宿州' }, { "n": '铜陵' }, { "n": '芜湖' }, { "n": '宣城' }]
            }, {
                "n": '澳门',
                citylist: [{ "n": '大堂区' }, { "n": '氹仔' }, { "n": '风顺堂区' }, { "n": '花地玛堂区' }, { "n": '路环岛' }, { "n": '圣安多尼堂区' }, { "n": '望德堂区' }]
            }, {
                "n": '北京',
                citylist: [{ "n": "昌平" }, { "n": "朝阳" }, { "n": "东城" }, { "n": "大兴" }, { "n": "房山" }, { "n": "丰台" }, { "n": "海淀" }, { "n": "怀柔" }, { "n": "门头沟" }, { "n": "密云" }, { "n": "平谷" }, { "n": "石景山" }, { "n": "顺义" }, { "n": "通州" }, { "n": "西城" }, { "n": "延庆" }]
            }, {
                "n": '重庆',
                citylist: [{ "n": "北碚" }, { "n": "巴南" }, { "n": "璧山" }, { "n": "城口" }, { "n": "长寿" }, { "n": "大渡口" }, { "n": "垫江" }, { "n": "大足" }, { "n": "丰都" }, { "n": "奉节" }, { "n": "涪陵" }, { "n": "合川" }, { "n": "江北" }, { "n": "江津" }, { "n": "九龙坡" }, { "n": "开县" }, { "n": "两江新区" }, { "n": "梁平" }, { "n": "南岸" }, { "n": "南川" }, { "n": "彭水" }, { "n": "綦江" }, { "n": "黔江" }, { "n": "荣昌" }, { "n": "沙坪坝" }, { "n": "双桥" }, { "n": "石柱" }, { "n": "铜梁" }, { "n": "潼南" }, { "n": "武隆" }, { "n": "巫山" }, { "n": "万盛" }, { "n": "巫溪" }, { "n": "万州" }, { "n": "秀山" }, { "n": "渝北" }, { "n": "永川" }, { "n": "酉阳" }, { "n": "云阳" }, { "n": "渝中" }, { "n": "忠县" }]
            }, {
                "n": '福建',
                citylist: [{ "n": "福州" }, { "n": "龙岩" }, { "n": "宁德" }, { "n": "南平" }, { "n": "莆田" }, { "n": "泉州" }, { "n": "厦门" }, { "n": "三明" }, { "n": "漳州" }]
            }, {
                "n": '广东',
                citylist: [{ "n": "潮州" }, { "n": "东莞" }, { "n": "佛山" }, { "n": "广州" }, { "n": "河源" }, { "n": "惠州" }, { "n": "江门" }, { "n": "揭阳" }, { "n": "茂名" }, { "n": "梅州" }, { "n": "清远" }, { "n": "韶关" }, { "n": "汕头" }, { "n": "汕尾" }, { "n": "深圳" }, { "n": "云浮" }, { "n": "阳江" }, { "n": "珠海" }, { "n": "湛江" }, { "n": "肇庆" }, { "n": "中山" }]
            }, {
                "n": '甘肃',
                citylist: [{ "n": "白银" }, { "n": "定西" }, { "n": "甘南" }, { "n": "金昌" }, { "n": "酒泉" }, { "n": "嘉峪关" }, { "n": "陇南" }, { "n": "临夏" }, { "n": "兰州市" }, { "n": "平凉" }, { "n": "庆阳" }, { "n": "天水" }, { "n": "武威" }, { "n": "张掖" }]
            }, {
                "n": '广西',
                citylist: [{ "n": "北海" }, { "n": "百色" }, { "n": "崇左" }, { "n": "防城港" }, { "n": "贵港" }, { "n": "桂林" }, { "n": "河池" }, { "n": "贺州" }, { "n": "来宾" }, { "n": "柳州" }, { "n": "南宁" }, { "n": "钦州" }, { "n": "梧州" }, { "n": "玉林" }]
            }, {
                "n": '贵州',
                citylist: [{ "n": "安顺" }, { "n": "毕节" }, { "n": "贵阳" }, { "n": "六盘水" }, { "n": "黔东南" }, { "n": "黔南" }, { "n": "黔西南" }, { "n": "铜仁" }, { "n": "遵义" }]
            }, {
                "n": '河北',
                citylist: [{ "n": "保定" }, { "n": "承德" }, { "n": "沧州" }, { "n": "邯郸" }, { "n": "衡水" }, { "n": "廊坊" }, { "n": "秦皇岛" }, { "n": "石家庄" }, { "n": "唐山" }, { "n": "邢台" }, { "n": "张家口" }]
            }, {
                "n": '湖北',
                citylist: [{ "n": "恩施" }, { "n": "鄂州" }, { "n": "黄冈" }, { "n": "黄石" }, { "n": "荆门" }, { "n": "潜江" }, { "n": "神农架" }, { "n": "十堰" }, { "n": "随州" }, { "n": "天门" }, { "n": "武汉" }, { "n": "孝感" }, { "n": "咸宁" }, { "n": "仙桃" }, { "n": "襄阳" }, { "n": "宜昌" }]
            }, {
                "n": '黑龙江',
                citylist: [{ "n": "大庆" }, { "n": "大兴安岭" }, { "n": "哈尔滨" }, { "n": "鹤岗" }, { "n": "黑河" }, { "n": "佳木斯" }, { "n": "鸡西" }, { "n": "牡丹江" }, { "n": "齐齐哈尔" }, { "n": "七台河" }, { "n": "绥化" }, { "n": "双鸭山" }, { "n": "伊春" }]
            }, {
                "n": '海南',
                citylist: [{ "n": "白沙" }, { "n": "保亭" }, { "n": "昌江" }, { "n": "澄迈" }, { "n": "定安" }, { "n": "东方" }, { "n": "儋州" }, { "n": "海口" }, { "n": "乐东" }, { "n": "临高" }, { "n": "陵水" }, { "n": "琼海" }, { "n": "琼中" }, { "n": "三沙" }, { "n": "三亚" }, { "n": "屯昌" }, { "n": "文昌" }, { "n": "万宁" }, { "n": "五指山" }]
            }, {
                "n": '河南',
                citylist: [{ "n": "安阳" }, { "n": "鹤壁" }, { "n": "济源" }, { "n": "焦作" }, { "n": "开封" }, { "n": "漯河" }, { "n": "洛阳" }, { "n": "南阳" }, { "n": "平顶山" }, { "n": "濮阳" }, { "n": "三门峡" }, { "n": "商区" }, { "n": "许昌" }, { "n": "新乡" }, { "n": "信阳" }, { "n": "周口" }, { "n": "驻马店" }, { "n": "郑州" }]
            }, {
                "n": '湖南',
                citylist: [{ "n": "常德" }, { "n": "长沙" }, { "n": "郴州" }, { "n": "怀化" }, { "n": "衡阳" }, { "n": "娄底" }, { "n": "邵阳" }, { "n": "湘潭" }, { "n": "湘西" }, { "n": "益阳" }, { "n": "岳阳" }, { "n": "永州" }, { "n": "张家界" }, { "n": "株洲" }]
            }, {
                "n": '吉林',
                citylist: [{ "n": "白城" }, { "n": "白山" }, { "n": "长春" }, { "n": "吉林" }, { "n": "辽源" }, { "n": "四平" }, { "n": "松原" }, { "n": "通化" }, { "n": "延边" }]
            }, {
                "n": '江苏',
                citylist: [{ "n": "常州" }, { "n": "淮安" }, { "n": "连云港" }, { "n": "南京" }, { "n": "南通" }, { "n": "宿迁" }, { "n": "苏州" }, { "n": "秦州" }, { "n": "无锡" }, { "n": "徐州" }, { "n": "盐城" }, { "n": "扬州" }, { "n": "镇江" }]
            }, {
                "n": '江西',
                citylist: [{ "n": "抚州" }, { "n": "赣州" }, { "n": "吉安" }, { "n": "景德镇" }, { "n": "九江" }, { "n": "南昌" }, { "n": "萍乡" }, { "n": "上饶" }, { "n": "新余" }, { "n": "宜春" }, { "n": "鹰潭" }]
            }, {
                "n": '辽宁',
                citylist: [{ "n": "鞍山" }, { "n": "本溪" }, { "n": "朝阳" }, { "n": "丹东" }, { "n": "大连" }, { "n": "抚顺" }, { "n": "阜新" }, { "n": "葫芦岛" }, { "n": "锦州" }, { "n": "辽阳" }, { "n": "盘锦" }, { "n": "沈阳" }, { "n": "铁岭" }, { "n": "营口" }]
            }, {
                "n": '内蒙古',
                citylist: [{ "n": "阿拉善" }, { "n": "包头" }, { "n": "巴彦淖尔" }, { "n": "赤峰" }, { "n": "鄂尔多斯" }, { "n": "呼和浩特" }, { "n": "呼伦贝尔" }, { "n": "通辽" }, { "n": "乌海" }, { "n": "乌兰察布" }, { "n": "兴安" }, { "n": "锡林郭勒" }]
            }, {
                "n": '宁夏',
                citylist: [{ "n": "固原" }, { "n": "石嘴山" }, { "n": "吴忠" }, { "n": "银川" }, { "n": "中卫" }]
            }, {
                "n": '青海',
                citylist: [{ "n": "果洛" }, { "n": "海北" }, { "n": "海东" }, { "n": "海南" }, { "n": "黄南" }, { "n": "海西" }, { "n": "西宁" }, { "n": "玉树" }]
            }, {
                "n": '四川',
                citylist: [{ "n": "阿坝" }, { "n": "巴中" }, { "n": "成都" }, { "n": "德阳" }, { "n": "达州" }, { "n": "广安" }, { "n": "广元" }, { "n": "甘孜" }, { "n": "乐山" }, { "n": "凉山" }, { "n": "泸州" }, { "n": "眉山" }, { "n": "锦阳" }, { "n": "南充" }, { "n": "内江" }, { "n": "攀枝花" }, { "n": "遂宁" }, { "n": "雅安" }, { "n": "宜宾" }, { "n": "自贡" }, { "n": "资阳" }]
            }, {
                "n": '山东',
                citylist: [{ "n": "滨州" }, { "n": "东营" }, { "n": "德州" }, { "n": "菏泽" }, { "n": "济南" }, { "n": "济宁" }, { "n": "聊城" }, { "n": "莱芜" }, { "n": "临沂" }, { "n": "青岛" }, { "n": "日照" }, { "n": "泰安" }, { "n": "潍坊" }, { "n": "威海" }, { "n": "烟台" }, { "n": "淄博" }, { "n": "枣庄" }]
            }, {
                "n": '上海',
                citylist: [{ "n": "宝山" }, { "n": "崇明" }, { "n": "长宁" }, { "n": "奉贤" }, { "n": "虹口" }, { "n": "黄浦" }, { "n": "静安" }, { "n": "嘉定" }, { "n": "金山" }, { "n": "卢湾" }, { "n": "闵行" }, { "n": "浦东新区" }, { "n": "普陀" }, { "n": "青浦" }, { "n": "松江" }, { "n": "徐汇" }, { "n": "杨浦" }, { "n": "闸北" }]
            }, {
                "n": '陕西',
                citylist: [{ "n": "安康" }, { "n": "宝鸡" }, { "n": "汉中" }, { "n": "商洛" }, { "n": "铜川" }, { "n": "渭南" }, { "n": "西安" }, { "n": "咸阳" }, { "n": "延安" }, { "n": "榆林" }]
            }, {
                "n": '山西',
                citylist: [{ "n": "长治" }, { "n": "大同" }, { "n": "晋城" }, { "n": "晋中" }, { "n": "临汾" }, { "n": "吕梁" }, { "n": "朔州" }, { "n": "太原" }, { "n": "忻州" }, { "n": "运城" }, { "n": "阳泉" }]
            }, {
                "n": '天津',
                citylist: [{ "n": "北辰" }, { "n": "宝坻" }, { "n": "滨海新区" }, { "n": "东丽" }, { "n": "河北" }, { "n": "河东" }, { "n": "和平" }, { "n": "红桥" }, { "n": "河西" }, { "n": "静海" }, { "n": "津南" }, { "n": "蓟县" }, { "n": "宁河" }, { "n": "南开" }, { "n": "武清" }, { "n": "西青" }]
            }, {
                "n": '台湾',
                citylist: [{ "n": "高雄市" }, { "n": "花莲县" }, { "n": "基隆市" }, { "n": "金门县" }, { "n": "嘉义市" }, { "n": "嘉义县" }, { "n": "连江县" }, { "n": "苗栗县" }, { "n": "南投县" }, { "n": "屏东县" }, { "n": "澎湖县" }, { "n": "台北市" }, { "n": "台东县" }, { "n": "台南市" }, { "n": "桃园县" }, { "n": "台中市" }, { "n": "新北市" }, { "n": "新竹市" }, { "n": "新竹县" }, { "n": "云林县" }, { "n": "宜兰县" }, { "n": "彰化县" }]
            }, {
                "n": '西藏',
                citylist: [{ "n": "阿里" }, { "n": "昌都" }, { "n": "拉萨" }, { "n": "林芝" }, { "n": "那曲" }, { "n": "日喀则" }, { "n": "山南" }]
            }, {
                "n": '香港',
                citylist: [{ "n": "北区" }, { "n": "大埔区" }, { "n": "东区" }, { "n": "观塘区" }, { "n": "黄大仙区" }, { "n": "九龙城区" }, { "n": "葵青区" }, { "n": "离岛区" }, { "n": "南区" }, { "n": "荃湾区" }, { "n": "深水埗区" }, { "n": "沙田区" }, { "n": "屯门区" }, { "n": "湾仔区" }, { "n": "西贡区" }, { "n": "油尖旺区" }, { "n": "元朗区" }, { "n": "中西区" }]
            }, {
                "n": '新疆',
                citylist: [{ "n": "阿克苏" }, { "n": "阿拉尔" }, { "n": "阿勒泰" }, { "n": "博尔塔拉" }, { "n": "巴音郭楞" }, { "n": "昌吉" }, { "n": "哈密" }, { "n": "和田" }, { "n": "克拉玛依" }, { "n": "喀什" }, { "n": "克孜勒苏" }, { "n": "石河子" }, { "n": "塔城" }, { "n": "吐鲁番" }, { "n": "图木舒克" }, { "n": "五家渠" }, { "n": "乌鲁木齐" }, { "n": "伊犁" }]
            }, {
                "n": '云南',
                citylist: [{ "n": "保山" }, { "n": "楚雄" }, { "n": "德宏" }, { "n": "大理" }, { "n": "迪庆" }, { "n": "红河" }, { "n": "昆明" }, { "n": "临沧" }, { "n": "丽江" }, { "n": "怒江" }, { "n": "普洱" }, { "n": "曲靖" }, { "n": "文山" }, { "n": "西双版纳" }, { "n": "玉溪" }, { "n": "邵通" }]
            }, {
                "n": '浙江',
                citylist: [{ "n": "杭州" }, { "n": "湖州" }, { "n": "金华" }, { "n": "嘉兴" }, { "n": "丽水" }, { "n": "宁波" }, { "n": "衢州" }, { "n": "绍兴" }, { "n": "台州" }, { "n": "温州" }, { "n": "舟山" }]
            }];

        return provcitylist;
    }
})(jQuery);


