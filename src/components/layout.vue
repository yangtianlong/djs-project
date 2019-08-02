<template>
  <div class="layui-body djs-body">
    <!-- 页面公共头部 -->
    <div class="layui-header djs-header">
      <div class="layui-logo">
        <router-link to="/home"><img src="/static/image/djs-logo.png"></router-link>
      </div>
      <ul class="layui-nav layui-layout-left main-nav">
        <li class="layui-nav-item"><a class="active" href="/pc/index.html"><span class="iconfont icon-shouye"></span><em>首页</em></a></li>
        <li class="layui-nav-item"><a href="/pc/pages/offer/offer_index.html"><span class="iconfont icon-ib"></span><em>同业</em></a>
          <dl class="layui-nav-child">
            <span class="layer_arrow"><i class="s_i"></i><b class="s_b"></b></span>
            <dd><a href="/pc/pages/offer/offer_index.html">报价平台</a></dd>
            <dd><a href="/pc/pages/asset/asset_index.html">资产平台</a></dd>
            <dd><a href="/pc/pages/circle/circle_index.html">大金融圈</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item"><a href="/pc/pages/ideabank/ideabank_index.html"><span class="iconfont icon-ac"></span><em>智库</em></a>
          <dl class="layui-nav-child layui-anim layui-anim-upbit">
            <span class="layer_arrow"><i class="s_i"></i><b class="s_b"></b></span>
            <dd><a href="/pc/pages/ideabank/report.html">机构研报</a></dd>
            <dd><a href="/pc/pages/ideabank/expert.html">智库专家</a></dd>
            <dd><a href="/pc/pages/ideabank/forum.html">高端论坛</a></dd>
            <dd><a href="/pc/pages/ideabank/class.html">专家讲坛</a></dd>
            <dd><a href="/pc/pages/ideabank/course.html">精品课程</a></dd>
            <dd><a href="/pc/pages/ideabank/download.html">资料下载</a></dd>
            <dd><a href="/pc/pages/ideabank/salon.html">同业沙龙</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item"><a href="/pc/pages/news/news_index.html"><span class="iconfont icon-news"></span><em>资讯</em></a>
          <dl class="layui-nav-child layui-anim layui-anim-upbit">
            <span class="layer_arrow"><i class="s_i"></i><b class="s_b"></b></span>
            <dd><a href="/pc/pages/news/news_index.html">精品资讯</a></dd>
            <dd><a href="/pc/pages/data/shibor.html">金融数据</a></dd>
            <dd><a href="/pc/pages/gossip/gossip_index.html">金融八卦</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item"><a href="/pc/pages/job/position.html"><span class="mui-icon iconfont icon-ca"></span><em>职场</em></a>
          <dl class="layui-nav-child layui-anim layui-anim-upbit">
            <span class="layer_arrow"><i class="s_i"></i><b class="s_b"></b></span>
            <dd><a href="/pc/pages/job/position.html">高端职位</a></dd>
            <dd><a href="/pc/pages/job/talent.html">高级人才</a></dd>
            <dd><a href="/pc/pages/job/cooperate.html">欢迎合作</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item"><a href="app/index.html"><span class="iconfont icon-xiazai"></span><em>下载App</em><span class="layui-badge">Hot</span></a></li>
      </ul>
      <ul class="layui-nav layui-layout-right user-nav">
        <li class="layui-nav-item fun-publish"><a href="javascript:;"><span class="iconfont icon-tianjia2"></span></a>
          <dl class="layui-nav-child">
            <span class="layer_arrow"><i class="s_i"></i><b class="s_b"></b></span>
            <dd><a href="javascript:;">发布报价</a></dd>
            <dd><a href="javascript:;">发布资产</a></dd>
            <dd><a href="javascript:;">发布八卦</a></dd>
            <dd><a href="javascript:;">发布职位</a></dd>
            <dd><a href="javascript:;">发布简历</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item"><a href=""><span class="iconfont icon-search"></span></a></li>
        <li class="layui-nav-item"><a href=""><span class="iconfont icon-remind"></span><span class="layui-badge-dot"></span></a></li>
        <li class="layui-nav-item fun-user"><a href=""><span class="iconfont icon-setup"></span></a></li>
        <li class="layui-nav-item">
          <a href="user/user.html"><img src="/static/image/imgthumbs/headimg_1.jpg" class="layui-nav-img"><em>乐不可支</em><span class="layui-nav-more"></span></a>
          <dl class="layui-nav-child layui-anim layui-anim-upbit"><span class="layer_arrow"><i class="s_i"></i><b class="s_b"></b></span>
            <dd><a href="javascript:;">我的发布</a></dd>
            <dd><a href="javascript:;">我的收藏</a></dd>
            <dd><a href="javascript:;">我的预约</a></dd>
            <dd><a href="javascript:;">我的报名</a></dd>
            <dd><a href="javascript:;">我的职场</a></dd>
            <dd><a href="javascript:;">退出账号</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item fun-reg" style="display:none"><a href="login.html"><em>登录</em></a><span>|</span><a href="reg.html"><em>注册</em></a></li>
      </ul>
    </div>

    <router-view></router-view>

    <!-- 页面公共底部 -->
    <div class="footer">
      <div class="content-top">
        <div class="quick-link">
          <div class="logo"><img src="/static/image/djs-df-slogan.png"></div>
          <div class="courses-about">
            <div class="courses">
              <div class="cour-padd">
                <ul>
                  <li class="title">同业</li>
                  <li><a target="_blank" href="#">报价平台</a></li>
                  <li><a target="_blank" href="#">资产平台</a></li>
                  <li><a target="_blank" href="#">大金融圈</a></li>
                </ul>
                <ul>
                  <li class="title">智库</li>
                  <li><a target="_blank" href="#">机构研报</a></li>
                  <li><a target="_blank" href="#">智库专家</a></li>
                  <li><a target="_blank" href="#">高端论坛</a></li>
                  <li><a target="_blank" href="#">专家讲坛</a></li>
                  <li><a target="_blank" href="#">精品课程</a></li>
                  <li><a target="_blank" href="#">资料下载</a></li>
                  <li><a target="_blank" href="#">同业沙龙</a></li>
                </ul>
                <ul>
                  <li class="title">资讯</li>
                  <li><a target="_blank" href="#">精品资讯</a></li>
                  <li><a target="_blank" href="#">金融数据</a></li>
                  <li><a target="_blank" href="#">金融八卦</a></li>
                </ul>
                <ul>
                  <li class="title">职场</li>
                  <li><a target="_blank" href="#">高端职场</a></li>
                  <li><a target="_blank" href="#">高级人才</a></li>
                </ul>
              </div>
            </div>
            <div class="contact-us">
              <div class="cont-padd">
                <div class="title">联系我们</div>
                <div class="contact-info">
                  <p class="text1">客服电话：<span>(时间 8:00～22:00)</span></p>
                  <p class="text2">0755-82786009</p>
                  <p class="text1">24H热线：<span>(微信亦同号)</span></p>
                  <p class="text2">17704021318<span>/</span>13430484340</p>
                  <p class="text1">服务邮箱：<span>(投稿/合作/咨询等)</span></p>
                  <p class="text2"><a target="_blank" href="mailto:service@djs18.com">service@djs18.com</a></p>
                </div>
              </div>
            </div>
          </div>
          <div class="contact-ewm">
            <div class="ewm">
              <div class="webchat wl">
                <div class="item"><img src="/static/image/ewm.jpg"></div>
                <p class="title">微信公众号</p>
              </div>
            </div>
          </div>
        </div>
        <div class="friend-link">
          <ul>
            <li><a target="_blank" href="#">公司简介</a><span>|</span></li>
            <li><a target="_blank" href="#">招贤纳士</a><span>|</span></li>
            <li><a target="_blank" href="#">联系我们</a><span>|</span></li>
            <li><a target="_blank" href="#">欢迎合作</a><span>--</span></li>
            <li><a target="_blank" href="#">会员介绍</a><span>|</span></li>
            <li><a target="_blank" href="#">会员制度</a><span>|</span></li>
            <li><a target="_blank" href="#">会员协议</a><span>--</span></li>
            <li class="apply-flink"><a target="_blank" href="#">意见反馈</a></li>
          </ul>
        </div>
      </div>
      <div class="content-bottom">
        <p class="line1">版权所有 © 深圳市前海大成金融服务有限公司 <a target="_blank" href="http://www.miitbeian.gov.cn">粤ICP备14085762号-1</a></p>
        <p class="line1">Copyright © www.djs18.com. ALL Rights Reserved</p>
        <p class="line2"><a target="_blank" href="https://szcert.ebs.org.cn/bb29ace2-3b56-482b-8d6b-390b9aa6cbb8"><img src="/static/image/govIcon.gif"></a></p>
      </div>
    </div>

    <!-- 左侧菜单-默认隐藏 -->
    <div class="layui-side layui-side-menu djs-left" id="leftmenu" v-show="isShowLeft">
      <div class="layui-side-scroll">
        <h2 class="title"><em></em>产品与服务<em></em></h2>
        <ul class="layui-nav layui-nav-tree layui-bg-white" lay-shrink="all" lay-filter="test">
          <li class="layui-nav-item">
            <a href="javascript:;"><span class="item-icon fac-icon-2"></span><em>报价平台</em></a>
            <dl class="layui-nav-child">
              <dd><a href="#">线上</a></dd>
              <dd><a href="#">线下</a></dd>
              <dd><a href="#">存单<span class="layui-badge">68</span></a></dd>
              <dd><a href="#">理财</a></dd>
              <dd><a href="#">债券</a></dd>
              <dd><a href="#">票据</a></dd>
            </dl>
          </li>
          <li class="layui-nav-item">
            <a href="#"><span class="item-icon fac-icon-1"></span><em>资产平台</em></a>
          </li>
          <li class="layui-nav-item">
            <a href="javascript:;"><span class="item-icon fac-icon-3"></span><em>大成智库</em></a>
            <dl class="layui-nav-child">
              <dd><a href="#">机构研报</a></dd>
              <dd><a href="#">智库专家</a></dd>
              <dd><a href="#">高端论坛</a></dd>
              <dd><a href="#">专家讲坛</a></dd>
              <dd><a href="#">精品课程</a></dd>
              <dd><a href="#">资料下载</a></dd>
              <dd><a href="#">同业沙龙</a></dd>
            </dl>
          </li>
          <li class="layui-nav-item">
            <a href="javascript:;"><span class="item-icon fac-icon-4"></span><em>大金融圈</em></a>
            <dl class="layui-nav-child">
              <dd><a href="#">金融圈</a></dd>
              <dd><a href="#">公司圈</a></dd>
            </dl>
          </li>
          <li class="layui-nav-item">
            <a href="#"><span class="item-icon fac-icon-5"></span><em>精品资讯</em></a>
          </li>
          <li class="layui-nav-item">
            <a href="javascript:;"><span class="item-icon fac-icon-7"></span><em>数据研究</em></a>
            <dl class="layui-nav-child">
              <dd><a href="#">债券估值</a></dd>
              <dd><a href="#">Shibor报价</a></dd>
              <dd><a href="#">评级变动</a></dd>
              <dd><a href="#">新债发行</a></dd>
              <dd><a href="#">票据报价</a></dd>
            </dl>
          </li>
          <li class="layui-nav-item">
            <a href="javascript:;"><span class="item-icon fac-icon-6"></span><em>金领职场</em></a>
            <dl class="layui-nav-child">
              <dd><a href="#">高端职位</a></dd>
              <dd><a href="#">高级人才</a></dd>
              <dd><a href="#">欢迎合作</a></dd>
            </dl>
          </li>
          <li class="layui-nav-item">
            <a href="#"><span class="item-icon fac-icon-8"></span><em>金融八卦</em></a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 控制左侧菜单的显示隐藏 -->
    <div class="bottom-left">
      <div id="bottom-left-nav" @click="isLeft" :class="{ 'nav-up': isShowLeft }">
        <span class="iconfont icon-shangjiantou"></span><em>全部产品</em>
      </div>
    </div>

    <!-- 控制右下角图片广告的关闭 -->
    <div id="bottom-right-ad" v-if="isBottomR">
      <a id="close-ad" @click="isBottomR = false"></a>
      <a id="bclick" href="http://www.baidu.com"></a>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowLeft: false,
      isBottomR: true
    };
  },
  mounted() {
    //加载layui的导航模块
    layui.use("element", function() {
      var element = layui.element;
    });
  },
  methods: {
    //控制左侧菜单的显示隐藏
    isLeft: function() {
      this.isShowLeft = !this.isShowLeft;
    }
  }
};
</script>

<style>
</style>
