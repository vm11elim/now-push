var timer_n=2000;

// async function up() {
function up() {
    setInterval(() => {
        this.timer_n+=1;
      }, 100);
} 

export default {
    timer_n,
    up,
}