<template>
  <div id="works">
    <div class="items">
      <work>
        <img src="@/assets/imgs/works/mdqsd.jpg" alt="猫打球商店" slot="worksimg" width="150px">
        <div slot="type">风俗研究·私人生活场景</div>
        <div slot="title">猫打球商店</div>
      </work>
      <work>
        <img src="@/assets/imgs/works/scwh.jpg" alt="苏城舞会" slot="worksimg" width="150px">
        <div slot="type">风俗研究·私人生活场景</div>
        <div slot="title">苏城舞会</div>
      </work>
      <work>
        <img src="@/assets/imgs/works/qd.jpg" alt="钱袋" slot="worksimg" width="150px">
        <div slot="type">风俗研究·私人生活场景</div>
        <div slot="title">钱 袋</div>
      </work>
      <work>
        <img src="@/assets/imgs/works/mdstmnw.jpg" alt="莫黛斯特·米尼翁" slot="worksimg" width="150px">
        <div slot="type">风俗研究·私人生活场景</div>
        <div slot="title">莫黛斯特·米尼翁</div>
      </work>
      <work>
        <img src="@/assets/imgs/works/lgxjn.jpg" alt="两个新嫁娘" slot="worksimg" width="150px">
        <div slot="type">风俗研究·私人生活场景</div>
        <div slot="title">两个新嫁娘</div>
      </work>
      <work>
        <img src="@/assets/imgs/works/rszc.jpg" alt="入世之处" slot="worksimg" width="150px">
        <div slot="type">风俗研究·私人生活场景</div>
        <div slot="title">入世之处</div>
      </work>
      <work>
        <img src="@/assets/imgs/works/aebswls.jpg" alt="阿尔贝·萨瓦吕斯" slot="worksimg" width="150px">
        <div slot="type">风俗研究·私人生活场景</div>
        <div slot="title">阿尔贝·萨瓦吕斯</div>
      </work>
      <work>
        <img src="@/assets/imgs/works/jzfc.jpg" alt="家族复仇" slot="worksimg" width="150px">
        <div slot="type">风俗研究·私人生活场景</div>
        <div slot="title">家族复仇</div>
      </work>
      <work>
        <img src="@/assets/imgs/works/scjt.jpg" alt="双重家庭" slot="worksimg" width="150px">
        <div slot="type">风俗研究·私人生活场景</div>
        <div slot="title">双重家庭</div>
      </work>
      <work>
        <img src="@/assets/imgs/works/scwh.jpg" alt="苏城舞会" slot="worksimg" width="150px">
        <div slot="type">风俗研究·私人生活场景</div>
        <div slot="title">苏城舞会</div>
      </work>
      <work>
        <img src="@/assets/imgs/works/jtdhm.jpg" alt="家庭的和睦" slot="worksimg" width="150px">
        <div slot="type">风俗研究·私人生活场景</div>
        <div slot="title">家庭的和睦</div>
      </work>
      <work>
        <img src="@/assets/imgs/works/rjxj.jpg" alt="菲尔米亚尼夫人" slot="worksimg" width="150px">
        <div slot="type">风俗研究·私人生活场景</div>
        <div slot="title">菲尔米亚尼夫人</div>
      </work>
      <work>
        <img src="@/assets/imgs/works/rjxj.jpg" alt="妇女研究" slot="worksimg" width="150px">
        <div slot="type">风俗研究·私人生活场景</div>
        <div slot="title">妇女研究</div>
      </work>
      <work>
        <img src="@/assets/imgs/works/jqf.jpg" alt="假情妇" slot="worksimg" width="150px">
        <div slot="type">风俗研究·私人生活场景</div>
        <div slot="title">假情妇</div>
      </work>
      <work>
        <img src="@/assets/imgs/works/xwdne.jpg" alt="夏娃的女儿" slot="worksimg" width="150px">
        <div slot="type">风俗研究·私人生活场景</div>
        <div slot="title">夏娃的女儿</div>
      </work>
      <work>
        <img src="@/assets/imgs/works/rjxj.jpg" alt="信使" slot="worksimg" width="150px">
        <div slot="type">风俗研究·私人生活场景</div>
        <div slot="title">信 使</div>
      </work>
      <work>
        <img src="@/assets/imgs/works/rjxj.jpg" alt="石榴园" slot="worksimg" width="150px">
        <div slot="type">风俗研究·私人生活场景</div>
        <div slot="title">石榴园</div>
      </work>
      <work>
        <img src="@/assets/imgs/works/byqdnr.jpg" alt="被遗弃的女人" slot="worksimg" width="150px">
        <div slot="type">风俗研究·私人生活场景</div>
        <div slot="title">被遗弃的女人</div>
      </work>
      <work>
        <img src="@/assets/imgs/works/rjxj.jpg" alt="奥诺丽纳" slot="worksimg" width="150px">
        <div slot="type">风俗研究·私人生活场景</div>
        <div slot="title">奥诺丽纳</div>
      </work>
      <work>
        <img src="@/assets/imgs/works/gbsk.jpg" alt="高布赛克" slot="worksimg" width="150px">
        <div slot="type">风俗研究·私人生活场景</div>
        <div slot="title">高布赛克</div>
      </work>
    </div>

  </div>
</template>

<script>
  const work = () => import("@/components/common/work.vue")
  export default {
    name: "works",
    components: {
      work
    }
  }
</script>

<style scoped>
  .items {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
  }

  .item div {
    flex: 1;
    margin: 10px;
  }
</style>