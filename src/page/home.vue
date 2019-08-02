<template>
  <div class="main-body">
    <!-- 轮播 -->
    <div class="layui-row top-wrapper">
      <div class="layui-col-xs3 t-left">
        <div class="publishList">
          <ul class="layui-row">
            <li class="layui-col-xs6">
              <a href="#">
                <span class="iconfont icon-licai"></span>
                <cite>发布<em>报价</em></cite>
              </a>
            </li>
            <li class="layui-col-xs6">
              <a href="#">
                <span class="iconfont icon-qitashouru"></span>
                <cite>发布<em>资产</em></cite>
              </a>
            </li>
            <li class="layui-col-xs6">
              <a href="#">
                <span class="iconfont icon-zhinengyouhua"></span>
                <cite>发布<em>八卦</em></cite>
              </a>
            </li>
            <li class="layui-col-xs6">
              <a href="#">
                <span class="iconfont icon-addteam"></span>
                <cite>发布<em>职位</em></cite>
              </a>
            </li>
            <li class="layui-col-xs6">
              <a href="#">
                <span class="iconfont icon-solution"></span>
                <cite>新增<em>简历</em></cite>
              </a>
            </li>
            <li class="layui-col-xs6">
              <a href="#">
                <span class="iconfont icon-carryout"></span>
                <cite>商务<em>合作</em></cite>
              </a>
            </li>
          </ul>
        </div>
        <div class="web-notice">
          <h2 class="title"><em></em>通知公告<em></em></h2>
          <div class="innerwrap">
            <ul>
              <li><span>08.22</span><a href="#" target="_blank">大金所PC版V5.0版正式上线，欢迎体验</a></li>
              <li><span>08.12</span><a href="#" target="_blank">大金所App重磅推出，马上下载吧</a></li>
              <li><span>08.22</span><a href="#" target="_blank">大金所和某某机构签署战略合作协议</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="layui-col-xs6 t-center">
        <div class="layui-carousel" id="indexslide">
          <div carousel-item="">
            <div><img height="100%" src="/static/image/adimg/index1.jpg"></div>
            <div><img height="100%" src="/static/image/adimg/index2.jpg"></div>
            <div><img height="100%" src="/static/image/adimg/index3.jpg"></div>
          </div>
        </div>
      </div>
      <div class="layui-col-xs3 t-right">
        <div class="categoryList">
          <ul class="layui-row">
            <li class="layui-col-xs3">
              <a href="#">
                <span class="item-icon fac-icon-2"></span>
                <cite>报价</cite>
              </a>
            </li>
            <li class="layui-col-xs3">
              <a href="#">
                <span class="item-icon fac-icon-1"></span>
                <cite>资产</cite>
              </a>
            </li>
            <li class="layui-col-xs3">
              <a href="#">
                <span class="item-icon fac-icon-3"></span>
                <cite>智库</cite>
              </a>
            </li>
            <li class="layui-col-xs3">
              <a href="#">
                <span class="item-icon fac-icon-4"></span>
                <cite>圈子</cite>
              </a>
            </li>
            <li class="layui-col-xs3">
              <a href="#">
                <span class="item-icon fac-icon-5"></span>
                <cite>资讯</cite>
              </a>
            </li>
            <li class="layui-col-xs3">
              <a href="#">
                <span class="item-icon fac-icon-7"></span>
                <cite>数据</cite>
              </a>
            </li>
            <li class="layui-col-xs3">
              <a href="#">
                <span class="item-icon fac-icon-6"></span>
                <cite>职场</cite>
              </a>
            </li>
            <li class="layui-col-xs3">
              <a href="#">
                <span class="item-icon fac-icon-8"></span>
                <cite>八卦</cite>
              </a>
            </li>
          </ul>
        </div>

        <div class="appDownload">
          <img class="qrcode" src="/static/image/ewm.jpg" alt="Download index side qrcode">
          <div class="info">
            <div class="title">下载大金所App<span class="iconfont icon-youjiantou"></span></div>
            <div class="description">最专业的同业服务平台</div>
          </div>
        </div>
      </div>

    </div>
    <!-- 报价平台 -->
    <div class="layui-row fm-wrapper">
      <div class="layui-col-xs12">
        <div class="layui-tab fm-content" lay-filter="docDemoTabBrief">
          <div class="bk-title">
            <div class="left-tit"><em>报价平台</em></div>
            <ul class="layui-tab-title right-category">
              <li class="layui-this">线上</li>
              <li>线下</li>
              <li>存单</li>
              <li>理财</li>
              <li>债券</li>
              <li>票据</li>
            </ul>
          </div>
          <div class="layui-tab-content">
            <div class="layui-tab-item layui-show">
              <table class="layui-table">
                <colgroup>
                  <col width="17%">
                  <col width="8%">
                  <col width="10%">
                  <col width="11%">

                  <col width="11%">
                  <col width="11%">
                  <col width="11%">
                  <col width="11%">
                  <col width="10%">
                </colgroup>
                <thead class="coltit">
                  <tr>
                    <th>报价方</th>
                    <th>联系方式</th>
                    <th>方向</th>
                    <th>模式</th>

                    <th>对手</th>
                    <th>期限</th>
                    <th>利率</th>
                    <th>金额</th>
                    <th>发布时间</th>
                  </tr>
                </thead>
                <tbody class="colline">
                  <tr>
                    <td class="td1">李竞晖- 遂宁商业银行</td>
                    <td><span class="iconfont icon-answer fmcontact" data-type="contact1"></span></td>
                    <td>融入</td>
                    <td>押利率</td>
                    <td>-</td>
                    <td>-</td>
                    <td>3.25%</td>
                    <td>12亿</td>
                    <td>22:24</td>
                  </tr>
                  <tr>
                    <td class="td1">李子娜- 武安市农信社</td>
                    <td><span class="iconfont icon-answer fmcontact" data-type="contact2"></span></td>
                    <td>融出</td>
                    <td>其他</td>
                    <td>限农信</td>
                    <td>隔夜</td>
                    <td>3.25</td>
                    <td>34亿</td>
                    <td>22:24</td>
                  </tr>
                  <tr>
                    <td class="td1">张智超- 榆次融信村镇银行</td>
                    <td><span class="iconfont icon-answer fmcontact" data-type="contact1"></span></td>
                    <td>融出</td>
                    <td>其他</td>
                    <td>-</td>
                    <td>3天</td>
                    <td>-</td>
                    <td>-</td>
                    <td>22:24</td>
                  </tr>
                  <tr>
                    <td class="td1">郭良静- 郑州市市郊农信社</td>
                    <td><span class="iconfont icon-answer fmcontact" data-type="contact2"></span></td>
                    <td>融入</td>
                    <td>押利率</td>
                    <td>限农信</td>
                    <td>隔夜</td>
                    <td>3.25</td>
                    <td>14亿</td>
                    <td>22:24</td>
                  </tr>
                  <tr>
                    <td class="td1">浙江宁波商业银行宁波商业宁波商业李艺</td>
                    <td><span class="iconfont icon-answer fmcontact" data-type="contact1"></span></td>
                    <td>融入</td>
                    <td>押利率</td>
                    <td>限直连机构</td>
                    <td>隔夜</td>
                    <td>3.25%</td>
                    <td>4亿</td>
                    <td>22:24</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="layui-tab-item">
              <table class="layui-table">
                <colgroup>
                  <col width="17%">
                  <col width="8%">
                  <col width="5%">
                  <col width="10%">
                  <col width="5%">
                  <col width="5%">
                  <col width="5%">
                  <col width="5%">
                  <col width="5%">
                  <col width="5%">
                  <col width="5%">
                  <col width="5%">
                  <col width="10%">
                </colgroup>
                <thead class="coltit">
                  <tr>
                    <th>报价方</th>
                    <th>联系方式</th>
                    <th>方向</th>
                    <th>种类</th>
                    <th>7D</th>
                    <th>14D</th>
                    <th>1M</th>
                    <th>2M</th>
                    <th>3M</th>
                    <th>6M</th>
                    <th>9M</th>
                    <th>12M</th>
                    <th>发布时间</th>
                  </tr>
                </thead>
                <tbody class="colline">
                  <tr>
                    <td class="td1">李竞晖- 遂宁商业银行</td>
                    <td><span class="iconfont icon-answer fmcontact" data-type="contact1"></span></td>
                    <td>收</td>
                    <td>银行同存 $</td>
                    <td>-</td>
                    <td>3.25</td>
                    <td>3.25</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>3.25</td>
                    <td>5.25</td>
                    <td>22:24</td>
                  </tr>
                  <tr>
                    <td class="td1">李子娜- 武安市农信社</td>
                    <td><span class="iconfont icon-answer fmcontact" data-type="contact2"></span></td>
                    <td>收</td>
                    <td>银行同存 $</td>
                    <td>-</td>
                    <td>3.25</td>
                    <td>3.25</td>
                    <td>-</td>
                    <td>-</td>
                    <td>4.25</td>
                    <td>3.25</td>
                    <td>-</td>
                    <td>22:24</td>
                  </tr>
                  <tr>
                    <td class="td1">张智超- 榆次融信村镇银行</td>
                    <td><span class="iconfont icon-answer fmcontact" data-type="contact1"></span></td>
                    <td>收</td>
                    <td>银行同存 ¥</td>
                    <td>-</td>
                    <td>3.25</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>4.25</td>
                    <td>-</td>
                    <td>5.25</td>
                    <td>22:24</td>
                  </tr>
                  <tr>
                    <td class="td1">郭良静- 郑州市市郊农信社</td>
                    <td><span class="iconfont icon-answer fmcontact" data-type="contact2"></span></td>
                    <td>收</td>
                    <td>银行同存 $</td>
                    <td>-</td>
                    <td>-</td>
                    <td>3.25</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>5.25</td>
                    <td>22:24</td>
                  </tr>
                  <tr>
                    <td class="td1">浙江宁波商业银行宁波商业宁波商业李艺</td>
                    <td><span class="iconfont icon-answer fmcontact" data-type="contact1"></span></td>
                    <td>收</td>
                    <td>银行同存 ¥</td>
                    <td>-</td>
                    <td>1.25</td>
                    <td>3.25</td>
                    <td>-</td>
                    <td>-</td>
                    <td>4.25</td>
                    <td>-</td>
                    <td>5.25</td>
                    <td>22:24</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="layui-tab-item">内容3</div>
            <div class="layui-tab-item">内容4</div>
            <div class="layui-tab-item">内容5</div>
            <div class="layui-tab-item">内容6</div>
          </div>
        </div>
      </div>

    </div>
    <!-- 大成智库 -->
    <div class="layui-row zk-wrapper">
      <div class="bk-title">
        <div class="left-tit"><em>大成智库</em></div>
        <div class="right-fun"><span class="iconfont icon-addteam"></span><a href="">欢迎各机构研究团队免费入驻</a></div>
      </div>

      <div class="layui-row zk-content">
        <div class="layui-col-xs4 zkline-a">
          <h2 class="item-tit"><em></em>会议/活动/培训/沙龙<em></em></h2>
          <div class="event-con">
            <div class="item-list">
              <a class="activ-item" href="#">
                <div class="date">
                  <div class="date-wrapper">
                    <div class="mouth">9月</div>
                    <div class="day">08</div>
                  </div>
                </div>
                <div class="detail">
                  <div class="name">聚焦中国大固收高端论坛！业界大咖伊犁共议“金融行业危、机、合作、发展”！</div>
                  <div class="teacher">野村证券首席中国经济学家陆挺、天风证券资产证券化负责人资产证券等</div>
                  <div class="info">
                    <span class="state"><button class="layui-btn layui-btn-danger layui-btn-xs"><span class="iconfont icon-filedone"></span>报名</button></span>
                    <span class="dot">·</span>
                    <span class="base">#固收论坛#</span>
                    <span class="dot">·</span>
                    <span class="base">孝感</span>
                  </div>
                </div>
              </a>
              <a class="activ-item" href="#">
                <div class="date">
                  <div class="date-wrapper">
                    <div class="mouth">6月</div>
                    <div class="day">08</div>
                  </div>
                </div>
                <div class="detail">
                  <div class="name">“伊犁话同业”-2018年第二期中国大固收高端论坛即将重磅开启，金融大咖及百余名金融精英齐聚一堂，期待您的莅临！</div>
                  <div class="teacher">天风证券副总裁兼公司执委会委员、天风国际董事局主席翟晨曦等</div>
                  <div class="info">
                    <span class="state"><button class="layui-btn layui-btn-danger layui-btn-xs"><span class="iconfont icon-filedone"></span>报名</button></span>
                    <span class="dot">·</span>
                    <span class="base">#固收论坛#</span>
                    <span class="dot">·</span>
                    <span class="base">孝感</span>
                  </div>
                </div>
              </a>
              <a class="activ-item" href="#">
                <div class="date">
                  <div class="date-wrapper">
                    <div class="mouth">3月</div>
                    <div class="day">08</div>
                  </div>
                </div>
                <div class="detail">
                  <div class="name">第五十一讲：房企拿地模式投 北省联社解模式投 北省联析</div>
                  <div class="teacher">国泰君安证券股份有限公司董事总经理首席结构金融师毛剑</div>
                  <div class="info">
                    <span class="state"><button class="layui-btn layui-btn-primary layui-btn-xs"><span class="iconfont icon-filesync"></span>回顾</button></span>
                    <span class="dot">·</span>
                    <span class="base">#固收论坛#</span>
                    <span class="dot">·</span>
                    <span class="base">孝感</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="layui-col-xs4 zkline-b">
          <h2 class="item-tit"><em></em>研报/资料<em></em></h2>
          <div class="event-con">
            <div class="item-list">
              <a class="activ-item" href="#">
                <div class="left-info">
                  <div class="b-img">
                    <img src="/static/image/newsimg/1.jpg">
                  </div>
                </div>
                <div class="detail">
                  <div class="name">大额风险暴露管理办法&资管新规对银行和货币利率影响</div>
                  <div class="teacher">天风证券 | 华中债券研究团队</div>
                  <div class="info">
                    <span class="base"><button class="layui-btn layui-btn-primary layui-btn-xs"><span class="iconfont icon-file-text"></span>查看</button></span>
                    <span class="dot">·</span>
                    <span class="base">#机构研报#</span>
                    <span class="dot">·</span>
                    <span class="base">Free</span>
                  </div>
                </div>
              </a>
              <a class="activ-item" href="#">
                <div class="left-info">
                  <div class="b-img">
                    <img src="/static/image/newsimg/2.jpg">
                  </div>
                </div>
                <div class="detail">
                  <div class="name">大额风险暴露管理办法&资管新规对银行和货币利率影响</div>
                  <div class="teacher">天风证券 | 华中债券研究团队</div>
                  <div class="info">
                    <span class="base"><button class="layui-btn layui-btn-primary layui-btn-xs"><span class="iconfont icon-file-text"></span>查看</button></span>
                    <span class="dot">·</span>
                    <span class="base">#机构研报#</span>
                    <span class="dot">·</span>
                    <span class="base">Free</span>
                  </div>
                </div>
              </a>
              <a class="activ-item" href="#">
                <div class="left-info">
                  <div class="b-file">
                    <p class="d-word">word</p>
                  </div>
                </div>
                <div class="detail">
                  <div class="name">大额风险暴露管理 规对银暴露管理 规对行和货币利率影响</div>
                  <div class="teacher">天风证券 | 华中债券研究团队</div>
                  <div class="info">
                    <span class="base"><button class="layui-btn layui-btn-primary layui-btn-xs"><span class="iconfont icon-xiazai3"></span>下载</button></span>
                    <span class="dot">·</span>
                    <span class="base">#资料下载#</span>
                    <span class="dot">·</span>
                    <span class="base">¥6.99</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="layui-col-xs4 zkline-c">
          <h2 class="item-tit"><em></em>专家<em></em></h2>
          <div class="event-con">
            <div class="item-list">
              <a class="activ-item" href="#">
                <div class="left-info">
                  <div class="b-img">
                    <img src="/static/image/imgthumbs/headimg_1.jpg">
                  </div>
                </div>
                <div class="detail">
                  <div class="teacher">柯鹏海</div>
                  <div class="title1">厦门农商银行</div>
                  <div class="title2">金融市场部副总监、自贸区同业业务中心（持牌专营机构）总裁</div>
                  <div class="info">
                    <span class="base"><button class="layui-btn layui-btn-primary layui-btn-xs"><span class="iconfont icon-solution"></span>详情</button></span>
                    <span class="dot">·</span>
                    <span class="base">#智库专家#</span>
                  </div>
                </div>
              </a>

              <a class="activ-item" href="#">
                <div class="left-info">
                  <div class="b-img">
                    <img src="/static/image/newsimg/3.jpg">
                  </div>
                </div>
                <div class="detail">
                  <div class="teacher">尹占华</div>
                  <div class="title1">第一创业证券公司</div>
                  <div class="title2">投委会主席兼资产管理部负责人</div>
                  <div class="info">
                    <span class="base"><button class="layui-btn layui-btn-primary layui-btn-xs"><span class="iconfont icon-solution"></span>详情</button></span>
                    <span class="dot">·</span>
                    <span class="base">#智库专家#</span>
                  </div>
                </div>
              </a>
              <a class="activ-item" href="#">
                <div class="left-info">
                  <div class="b-img">
                    <img src="/static/image/newsimg/4.jpg">
                  </div>
                </div>
                <div class="detail">
                  <div class="teacher">李家春</div>
                  <div class="title1">东方证券资产管理有限公司</div>
                  <div class="title2">执行董事、公募固定收益投资部总经理</div>
                  <div class="info">
                    <span class="base"><button class="layui-btn layui-btn-primary layui-btn-xs"><span class="iconfont icon-solution"></span>详情</button></span>
                    <span class="dot">·</span>
                    <span class="base">#智库专家#</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 资产平台 -->
    <div class="layui-row zcpt-wrapper">

      <div class="layui-col-xs12">

        <div class="zcpt-content">
          <div class="bk-title">
            <div class="left-tit"><em>资产平台</em></div>
            <div class="right-fun"><span class="iconfont icon-transaction"></span><a href="">有项目合作需求请与我们联系</a></i></div>
          </div>
          <div class="bk-content">
            <table class="layui-table">
              <colgroup>
                <col width="320">
                <col width="120">
                <col width="100">
                <col width="100">
                <col width="100">
                <col width="100">
                <col width="80">
                <col width="120">
                <col width="100">
              </colgroup>
              <thead class="coltit">
                <tr>
                  <th>资产名称</th>
                  <th>利率</th>
                  <th>金额</th>
                  <th>期限</th>
                  <th>债项评级</th>
                  <th>主体评级</th>
                  <th>担保</th>
                  <th>发布日期</th>
                  <th>预约</th>
                </tr>
              </thead>
              <tbody class="colline">
                <tr>
                  <td class="title">北京海淀区国资控股AAA企业第一期PPN</td>
                  <td>6.3~6.8%</td>
                  <td>10亿</td>
                  <td>3年</td>
                  <td>AAA</td>
                  <td>N/A</td>
                  <td>无</td>
                  <td>2018-08-20</td>
                  <td><button class="layui-btn layui-btn-warm layui-btn-xs">预约</button></td>
                </tr>
                <tr>
                  <td class="title">临汾市尧都区投资建设开发2018年公司债</td>
                  <td>6.3~6.8%</td>
                  <td>10亿</td>
                  <td>3年</td>
                  <td>AAA</td>
                  <td>N/A</td>
                  <td>无</td>
                  <td>2018-08-20</td>
                  <td><button class="layui-btn layui-btn-warm layui-btn-xs">预约</button></td>
                </tr>
                <tr>
                  <td class="title">如意集团2018年公开发行公司债（第一期） </td>
                  <td>6.3~6.8%</td>
                  <td>10亿</td>
                  <td>3年</td>
                  <td>AAA</td>
                  <td>N/A</td>
                  <td>无</td>
                  <td>2018-08-20</td>
                  <td><button class="layui-btn layui-btn-warm layui-btn-xs">预约</button></td>
                </tr>
                <tr>
                  <td class="title">鲁晨鸣（A+B+H股上市公司）公晨鸣（A+B+H股上市公司）公 第第二债</td>
                  <td>6.3~6.8%</td>
                  <td>10亿</td>
                  <td>3年</td>
                  <td>AAA</td>
                  <td>N/A</td>
                  <td>无</td>
                  <td>2018-08-20</td>
                  <td><button class="layui-btn layui-btn-warm layui-btn-xs">预约</button></td>
                </tr>
                <tr>
                  <td class="title"> 联合光伏（央企控股）2018年第一期小公募</td>
                  <td>6.3~6.8%</td>
                  <td>10亿</td>
                  <td>3年</td>
                  <td>AAA</td>
                  <td>N/A</td>
                  <td>无</td>
                  <td>2018-08-20</td>
                  <td><button class="layui-btn layui-btn-warm layui-btn-xs">预约</button></td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
    <!-- 精品资讯 -->
    <div class="layui-row zx-wrapper">

      <div class="layui-col-xs4 t-1">
        <div class="bk-title">
          <div class="left-tit"><em>精品资讯</em></div>
          <div class="right-fun"><a href="javascript:;" id="infoExchange" @click="infoExchange">换一批</a><span class="iconfont icon-shuaxin2"></span></div>
        </div>

        <div class="layui-row news-content">
          <div class="event-con">
            <div class="item-list">
              <a class="activ-item" href="#">
                <div class="left-info">
                  <div class="b-img">
                    <img src="/static/image/newsimg/1.jpg">
                  </div>
                </div>
                <div class="detail">
                  <div class="name">国家队正式进场，四大AMC之一长城资产已设P2P风险处置小组</div>
                  <div class="teacher">2018-08-23 18:42:00</div>
                </div>
              </a>
              <a class="activ-item" href="#">
                <div class="left-info">
                  <div class="b-img">
                    <img src="/static/image/newsimg/3.jpg">
                  </div>
                </div>
                <div class="detail">
                  <div class="name">国家队正式进场，四大AMC之一长城资产已设P2P风险处置小组</div>
                  <div class="teacher">2018-08-23 17:32:00</div>
                </div>
              </a>
              <a class="activ-item" href="#">
                <div class="left-info">
                  <div class="b-img">
                    <img src="/static/image/newsimg/2.jpg">
                  </div>
                </div>
                <div class="detail">
                  <div class="name">大金所新闻早餐语音版：国内外政经、世界500强最新动态(20180824)</div>
                  <div class="teacher">2018-08-23 17:02:00</div>
                </div>
              </a>
              <a class="activ-item" href="#">
                <div class="left-info">
                  <div class="b-img">
                    <img src="/static/image/newsimg/4.jpg">
                  </div>
                </div>
                <div class="detail">
                  <div class="name">【重磅】《中国银保监会农村中小金融机构行政许可事项实施办法》重新公布</div>
                  <div class="teacher">2018-08-23 16:02:00</div>
                </div>
              </a>
              <a class="activ-item" href="#">
                <div class="left-info">
                  <div class="b-img">
                    <img src="/static/image/newsimg/5.jpg">
                  </div>
                </div>
                <div class="detail">
                  <div class="name">国务院派出31个督查组分赴各地 促进有效投资和补短板是督查重中之重</div>
                  <div class="teacher">2018-08-23 16:00:00</div>
                </div>
              </a>
               <a class="activ-item" href="#">
                <div class="left-info">
                  <div class="b-img">
                    <img src="/static/image/newsimg/5.jpg">
                  </div>
                </div>
                <div class="detail">
                  <div class="name">国务院派出31个督查组分赴各地 促进有效投资和补短板是督查重中之重</div>
                  <div class="teacher">2018-08-23 16:00:00</div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>

      <div class="layui-col-xs4 t-2">
        <div class="bk-title">
          <div class="left-tit"><em>金融八卦</em></div>
          <div class="right-fun"><a href="">换一批</a><span class="iconfont icon-shuaxin2"></span></div>
        </div>

        <div class="layui-row gossip-content">
          <div class="event-con">
            <div class="item-list">
              <a class="activ-item" href="#">
                <div class="detail">
                  <div class="time">匿名 | 2018-08-23 18:42:00</div>
                  <div class="name">国家队正式进场，四大AMC之一长进场，四大AMC之进场，四大AMC之城资产处处置小组</div>
                </div>
                <div class="b-img">
                  <img src="/static/image/newsimg/6.jpg">
                </div>
              </a>
              <a class="activ-item" href="#">
                <div class="detail">
                  <div class="time">匿名 | 2018-08-23 18:42:00</div>
                  <div class="name">国家队正式进场，四大AMC之一长风险处处置小组</div>
                </div>
                <div class="b-img">
                  <img src="/static/image/newsimg/7.jpg">
                </div>
              </a>
              <a class="activ-item" href="#">
                <div class="detail">
                  <div class="time">匿名 | 2018-08-23 18:42:00</div>
                  <div class="name">国家队正式进场，四大AM2P风险处处置小组</div>
                </div>
                <div class="b-img">
                  <img src="/static/image/newsimg/8.jpg">
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>

      <div class="layui-col-xs4 t-3">
        <div class="bk-title">
          <div class="left-tit"><em>金融数据</em></div>
          <div class="right-fun"><a href="">查看详细</a><span class="iconfont icon-gengduo"></span></div>
        </div>

        <div class="layui-row data-content">
          <div class="layui-collapse" lay-accordion="">
            <div class="layui-colla-item">
              <h2 class="layui-colla-title">今日Shibor报价</h2>
              <div class="layui-colla-content layui-show">
                <p>整理Shibor目前总共8个标准期限品种的报价，涵盖所有的历史数据查询对比。</p>
                <button class="layui-btn  layui-btn-warm layui-btn-sm">查看数据</button>
              </div>
            </div>
            <div class="layui-colla-item">
              <h2 class="layui-colla-title">非金融企业债务融资工具定价估值</h2>
              <div class="layui-colla-content">
                <p>整理由银行间市场交易商协会发布的非金融企业债务融资工具定价估值，涵盖所有历史数据查询。</p>
                <button class="layui-btn  layui-btn-warm layui-btn-sm">查看数据</button>
              </div>
            </div>
            <div class="layui-colla-item">
              <h2 class="layui-colla-title">新债发行</h2>
              <div class="layui-colla-content">
                <p>整理每日新发的债券信息，还包括6万多条历史发行债券的详细信息查询。</p>
                <button class="layui-btn  layui-btn-warm layui-btn-sm">查看数据</button>
              </div>
            </div>
            <div class="layui-colla-item">
              <h2 class="layui-colla-title">评级变动</h2>
              <div class="layui-colla-content">
                <p>收集整理各类债券评级变动的详细信息，分类详细，信息全面。</p>
                <button class="layui-btn  layui-btn-warm layui-btn-sm">查看数据</button>
              </div>
            </div>
          </div>

          <div class="data-coop">
            <div class="custom-made">
              <p><span>数据定制</span>：如果您有金融数据的定制需求，可以与我们的产品经理直接联系。邮箱：<a href="">fyh@djs18.com</a></p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- 金领职场 -->
    <div class="layui-row job-wrapper">

      <div class="layui-col-xs8 jobcon">
        <div class="bk-title">
          <div class="left-tit"><em>金领职场</em></div>
          <div class="right-fun"><a href="">换一批</a><span class="iconfont icon-shuaxin2"></span></div>
        </div>

        <div class="jobList">
          <ul>
            <li class="job-item">
              <div class="layui-row">
                <div class="layui-col-xs6 jobMsg">
                  <div class="jtitle">
                    <a href="#" target="_blank">业务发展部副经理</a>
                    <span class="fast">急</span>
                  </div>
                  <div class="jinfo">
                    <span class="money">60-100W</span><em>/</em>
                    <span class="ads">北京</span><em>/</em>
                    <span class="suffer">3年及以上</span><em>/</em>
                    <span class="edu">本科</span>
                  </div>
                </div>
                <div class="layui-col-xs6 companyMsg">
                  <div class="ctitle">
                    <a href="#" target="_blank" class="companyName">中联重科融资租赁（北京）公司</a>
                  </div>
                  <div class="cinfo">
                    <span class="type">租赁</span><em>/</em>
                    <span class="personNum">150 - 199人</span>
                  </div>
                </div>
              </div>
            </li>
            <li class="job-item">
              <div class="layui-row">
                <div class="layui-col-xs6 jobMsg">
                  <div class="jtitle">
                    <a href="#" target="_blank">高级开发工程师</a>
                  </div>
                  <div class="jinfo">
                    <span class="money">薪金面议</span><em>/</em>
                    <span class="ads">深圳</span><em>/</em>
                    <span class="suffer">3年及以上</span><em>/</em>
                    <span class="edu">本科</span>
                  </div>
                </div>
                <div class="layui-col-xs6 companyMsg">
                  <div class="ctitle">
                    <a href="#" target="_blank" class="companyName">深圳市前海大成金融服务有限公司</a>
                  </div>
                  <div class="cinfo">
                    <span class="type">金融</span><em>/</em>
                    <span class="personNum">50 - 99人</span>
                  </div>
                </div>
              </div>
            </li>
            <li class="job-item">
              <div class="layui-row">
                <div class="layui-col-xs6 jobMsg">
                  <div class="jtitle">
                    <a href="#" target="_blank">同业营运总监</a>
                  </div>
                  <div class="jinfo">
                    <span class="money">薪金面议</span><em>/</em>
                    <span class="ads">深圳</span><em>/</em>
                    <span class="suffer">3年及以上</span><em>/</em>
                    <span class="edu">本科</span>
                  </div>
                </div>
                <div class="layui-col-xs6 companyMsg">
                  <div class="ctitle">
                    <a href="#" target="_blank" class="companyName">深圳市前海大成金融服务有限公司</a>
                  </div>
                  <div class="cinfo">
                    <span class="type">金融</span><em>/</em>
                    <span class="personNum">50 - 99人</span>
                  </div>
                </div>
              </div>
            </li>
            <li class="job-item">
              <div class="layui-row">
                <div class="layui-col-xs6 jobMsg">
                  <div class="jtitle">
                    <a href="#" target="_blank">信用研究员</a>
                  </div>
                  <div class="jinfo">
                    <span class="money">30-50W</span><em>/</em>
                    <span class="ads">深圳</span><em>/</em>
                    <span class="suffer">3年-5年</span><em>/</em>
                    <span class="edu">本科</span>
                  </div>
                </div>
                <div class="layui-col-xs6 companyMsg">
                  <div class="ctitle">
                    <a href="#" target="_blank" class="companyName">北京高熵资产管理有限公司</a>
                  </div>
                  <div class="cinfo">
                    <span class="type">金融</span><em>/</em>
                    <span class="personNum">50 - 99人</span>
                  </div>
                </div>
              </div>
            </li>
            <li class="job-item">
              <div class="layui-row">
                <div class="layui-col-xs6 jobMsg">
                  <div class="jtitle">
                    <a href="#" target="_blank">固收业务投资经理</a>
                  </div>
                  <div class="jinfo">
                    <span class="money">薪金面议</span><em>/</em>
                    <span class="ads">深圳/北京</span><em>/</em>
                    <span class="suffer">5年及以上</span><em>/</em>
                    <span class="edu">本科</span>
                  </div>
                </div>
                <div class="layui-col-xs6 companyMsg">
                  <div class="ctitle">
                    <a href="#" target="_blank" class="companyName">上海某金融信息服务有限公司</a>
                  </div>
                  <div class="cinfo">
                    <span class="type">金融</span><em>/</em>
                    <span class="personNum">50 - 99人</span>
                  </div>
                </div>
              </div>
            </li>

          </ul>
        </div>

      </div>

      <div class="layui-col-xs4 fincon">
        <div class="bk-title">
          <div class="left-tit"><em>大金融圈</em></div>
          <div class="right-fun"><a href="">换一批</a><span class="iconfont icon-shuaxin2"></span></div>
        </div>

        <div class="event-con">
          <div class="item-list">
            <a class="activ-item" href="#">
              <div class="left-info">
                <div class="b-img">
                  <img src="/static/image/newsimg/9.jpg">
                </div>
              </div>
              <div class="detail">
                <div class="fname">柯鹏海<span>(厦门农商银行)</span></div>
                <div class="title2">金融市场部副总监、自贸区同业业务中心（持牌专营机构）总裁</div>
              </div>
            </a>

            <a class="activ-item" href="#">
              <div class="left-info">
                <div class="b-img">
                  <img src="/static/image/newsimg/8.jpg">
                </div>
              </div>
              <div class="detail">
                <div class="fname">尹占华<span>(第一创业证券公司)</span></div>
                <div class="title2">投委会主席兼资产管理部负责人</div>
              </div>
            </a>
            <a class="activ-item" href="#">
              <div class="left-info">
                <div class="b-img">
                  <img src="/static/image/newsimg/7.jpg">
                </div>
              </div>
              <div class="detail">
                <div class="fname">李家春<span>(东方证券资产管理有限公司)</span></div>
                <div class="title2">执行董事、公募固定收益投资部总经理</div>
              </div>
            </a>
            <a class="activ-item" href="#">
              <div class="left-info">
                <div class="b-img">
                  <img src="/static/image/newsimg/6.jpg">
                </div>
              </div>
              <div class="detail">
                <div class="fname">尹占华<span>(第一创业证券公司)</span></div>
                <div class="title2">投委会主席兼资产管理部负责人</div>
              </div>
            </a>
            <a class="activ-item" href="#">
              <div class="left-info">
                <div class="b-img">
                  <img src="/static/image/newsimg/5.jpg">
                </div>
              </div>
              <div class="detail">
                <div class="fname">李家春<span>(东方证券资产管理有限公司)</span></div>
                <div class="title2">执行董事、公募固定收益投资部总经理</div>
              </div>
            </a>
          </div>
        </div>

      </div>

    </div>
    <!-- 通栏广告 -->
    <div class="layui-row ad-wrapper">
      <a href="1.html" target="_blank"><img src="/static/image/adimg/ad1140a.jpg"></a>
      <mark class="size_icon"><a href="2.html" target="_blank">想投放广告？</a></mark>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted: function() {
    layui.use(["carousel"], function() {
      var carousel = layui.carousel;
        
      //建造实例
      carousel.render({
        elem: "#indexslide",
        width: "100%",
        height: "270px",
        interval: 8000
      });
    });
  },
  methods: {
    //精品资讯换一批
    infoExchange: function(){
      if($('.news-content .item-list>.activ-item').length < 5){
        $('#infoExchange').css('disable','disable');
      }else if(5 < $('.news-content .item-list>.activ-item').length < 10){
        $('.news-content .item-list>.activ-item').slice(0,5).hide().appendTo('.news-content .item-list');
        $('.news-content .item-list>.activ-item').slice(0,5).fadeIn();
      }else{
        $('.news-content .item-list>.activ-item').slice(5,10).fadeIn();
        $('.news-content .item-list>.activ-item').slice(0,5).hide().appendTo('.news-content .item-list');
      }
    }
  }
};
</script>

<style>
</style>
