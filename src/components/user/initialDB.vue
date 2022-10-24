<template>
  <div>
  </div>
</template>

<script>
import { doc, getDoc, collection, query, where, getDocs,setDoc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import {db} from 'src/main.js'

export default {
  name: 'initialDB', 
  mounted:function(){
    if(!false)
      this.INITIAL();
    // console.log(fixed_value.precepts);
    // this.get("01085429052","2022-10-23") //method1 will execute at pageload
  },
  methods: { 
    async INITIAL() {
      
      // const user1 = ;
      // await setDoc(doc(collection(db, "users")), {name: "김건엽",phone: "01085429052",title: "매니저",pic:"", appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "개발팀", name: "김건엽",phone: "010-8542-9052",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "개발팀", name: "김건엽2",phone: "010-2596-3844",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "개발팀", name: "김건엽3",phone: "010-2579-3844",appinstall: false,bio:false, vote_value:2, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "경영지원팀", name: "송태호",phone: "010-7657-5828",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "경영지원팀", name: "홍석우",phone: "010-4171-7179",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "경영지원팀", name: "주영순",phone: "010-9404-8415",appinstall: false,bio:false, vote_value:2, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "정보보안사업팀", name: "이대영",phone: "010-3636-5109",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "정보보안사업팀", name: "장웅",phone: "010-7745-6857",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "정보보안사업팀", name: "곽제균",phone: "010-3604-3895",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "정보보안사업팀", name: "신동열",phone: "010-2758-3541",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "정보보안사업팀", name: "신태환",phone: "010-9109-6820",appinstall: false,bio:false, vote_value:2, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "정보보안사업팀", name: "이예진",phone: "010-4122-7466",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "정보보안사업팀", name: "이예진",phone: "010-2878-4308",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "정보보안사업팀", name: "나경환",phone: "010-5435-9584",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "UC솔루션팀", name: "박종식",phone: "010-5916-3941",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "UC솔루션팀", name: "장성원",phone: "010-8888-8799",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "UC솔루션팀", name: "이종환",phone: "010-4279-8501",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "UC솔루션팀", name: "정유석",phone: "010-7222-7658",appinstall: false,bio:false, vote_value:2, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "UC서비스팀", name: "기한석",phone: "010-9984-5518",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "UC서비스팀", name: "김호성",phone: "010-2839-7430",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "UC서비스팀", name: "김동환",phone: "010-5259-9656",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "UC서비스팀", name: "김재현",phone: "010-7271-2946",appinstall: false,bio:false, vote_value:2, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "UC서비스팀", name: "김순환",phone: "010-3238-2140",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "UC서비스팀", name: "채종규",phone: "010-5775-7754",appinstall: false,bio:false, vote_value:2, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "UC서비스팀", name: "유채린",phone: "010-2309-6658",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "서베이팀", name: "이현석",phone: "010-2407-4268",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "서베이팀", name: "장요성",phone: "010-2031-8131",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "서베이팀", name: "신은해",phone: "010-4653-4203",appinstall: false,bio:false, vote_value:2, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "서베이팀", name: "강민선",phone: "010-7705-9416",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "개발팀", name: "조남철",phone: "010-4709-6067",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "개발팀", name: "박근형",phone: "010-6334-2877",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "개발팀", name: "유상호",phone: "010-9999-2672",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "개발팀", name: "강은영",phone: "010-9660-1009",appinstall: false,bio:false, vote_value:2, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "개발팀", name: "이경능",phone: "010-9626-5090",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "개발팀", name: "장도우",phone: "010-7437-7731",appinstall: false,bio:false, vote_value:1, agree:true});
      await setDoc(doc(collection(db, "users")), {team: "개발팀", name: "고현민",phone: "010-2881-2501",appinstall: false,bio:false, vote_value:1, agree:true});

    },
    // async INITIAL2() {
      
    //   // const user1 = ;
    //   // await setDoc(doc(collection(db, "users")), {name: "김건엽",phone: "01085429052",title: "매니저",pic:"", appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-8542-9052")), {team: "개발팀", name: "김건엽",phone: "010-8542-9052",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-7657-5828")), {team: "경영지원팀", name: "송태호",phone: "010-7657-5828",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-4171-7179")), {team: "경영지원팀", name: "홍석우",phone: "010-4171-7179",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-9404-8415")), {team: "경영지원팀", name: "주영순",phone: "010-9404-8415",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-3636-5109")), {team: "정보보안사업팀", name: "이대영",phone: "010-3636-5109",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-7745-6857")), {team: "정보보안사업팀", name: "장웅",phone: "010-7745-6857",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-3604-3895")), {team: "정보보안사업팀", name: "곽제균",phone: "010-3604-3895",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-2758-3541")), {team: "정보보안사업팀", name: "신동열",phone: "010-2758-3541",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-9109-6820")), {team: "정보보안사업팀", name: "신태환",phone: "010-9109-6820",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-4122-7466")), {team: "정보보안사업팀", name: "이예진",phone: "010-4122-7466",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-2878-4308")), {team: "정보보안사업팀", name: "이예진",phone: "010-2878-4308",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-5435-9584")), {team: "정보보안사업팀", name: "나경환",phone: "010-5435-9584",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-5916-3941")), {team: "UC솔루션팀", name: "박종식",phone: "010-5916-3941",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-8888-8799")), {team: "UC솔루션팀", name: "장성원",phone: "010-8888-8799",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-4279-8501")), {team: "UC솔루션팀", name: "이종환",phone: "010-4279-8501",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-7222-7658")), {team: "UC솔루션팀", name: "정유석",phone: "010-7222-7658",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-9984-5518")), {team: "UC서비스팀", name: "기한석",phone: "010-9984-5518",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-2839-7430")), {team: "UC서비스팀", name: "김호성",phone: "010-2839-7430",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-5259-9656")), {team: "UC서비스팀", name: "김동환",phone: "010-5259-9656",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-7271-2946")), {team: "UC서비스팀", name: "김재현",phone: "010-7271-2946",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-3238-2140")), {team: "UC서비스팀", name: "김순환",phone: "010-3238-2140",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-5775-7754")), {team: "UC서비스팀", name: "채종규",phone: "010-5775-7754",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-2309-6658")), {team: "UC서비스팀", name: "유채린",phone: "010-2309-6658",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-2407-4268")), {team: "서베이팀", name: "이현석",phone: "010-2407-4268",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-2031-8131")), {team: "서베이팀", name: "장요성",phone: "010-2031-8131",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-4653-4203")), {team: "서베이팀", name: "신은해",phone: "010-4653-4203",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-7705-9416")), {team: "서베이팀", name: "강민선",phone: "010-7705-9416",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-4709-6067")), {team: "개발팀", name: "조남철",phone: "010-4709-6067",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-6334-2877")), {team: "개발팀", name: "박근형",phone: "010-6334-2877",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-9999-2672")), {team: "개발팀", name: "유상호",phone: "010-9999-2672",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-9660-1009")), {team: "개발팀", name: "강은영",phone: "010-9660-1009",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-9626-5090")), {team: "개발팀", name: "이경능",phone: "010-9626-5090",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-7437-7731")), {team: "개발팀", name: "장도우",phone: "010-7437-7731",appinstall: false,bio:false, vote_value:1, agree:true});
    //   await setDoc(doc(collection(db, "users","010-2881-2501")), {team: "개발팀", name: "고현민",phone: "010-2881-2501",appinstall: false,bio:false, vote_value:1, agree:true});

    // },
  }
}
</script>

<style>

</style>
