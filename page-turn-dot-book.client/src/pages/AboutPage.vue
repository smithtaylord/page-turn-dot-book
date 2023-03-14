<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 bg-success p-4">
        <div class="row">
          <div class="col-12 bg-warning p-3">
            <h1 class="fw-bold text-center">About Us & Our Site</h1>
            <img
              src="https://images.unsplash.com/photo-1548705085-101177834f47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGdyb3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="" class="about-picture">
            <div class="">
              <br>
              Welcome to pageturn.book! Our platform was designed and developed as a capstone project, with
              the aim of bringing book lovers together in an interactive and engaging online space.
              <br>
              <br>Our team is dedicated to creating a community where people can discover new authors, expand their
              literary horizons, and engage with like-minded individuals who share their passion for reading. We believe
              that the joy of reading should be accessible to everyone, and our book club application is our contribution
              towards that goal.
              <br>
              <br>Whether you're a seasoned reader or just starting your literary journey, our book club application has
              something for everyone. So why not join us today and start exploring the wonderful world of books with a
              community of like-minded individuals?
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 bg-warning">
            <div class="d-flex align-items-center">
              <img src="https://ca.slack-edge.com/T1GGQN1RU-U04KR6LNPBJ-fc0222e17534-512" alt=""
                class="profile-picture rounded-circle my-3 box-shadow">
              <div class="ps-3 my-3">
                <h4 class="fw-bold">Jaden Hawkes</h4>
                <span><a href="" class="mdi mdi-linkedin fs-3 text-dark"></a> <a href="https://github.com/HawkesJ02"
                    class="mdi mdi-github fs-3 text-dark selectable"></a></span>
                <h6>Full-Stack Developer</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 bg-warning">
            <div class="d-flex align-items-center">
              <img src="https://ca.slack-edge.com/T1GGQN1RU-U04KE4TMVKK-e2e9ef16878b-512" alt=""
                class="profile-picture rounded-circle my-3 box-shadow">
              <div class="ps-3 my-3">
                <h4 class="fw-bold">Dustin Bates</h4>
                <span><a href="" class="mdi mdi-linkedin fs-3 text-dark selectable"></a> <a href="https://github.com/dustinbates"
                    class="mdi mdi-github fs-3 text-dark selectable"></a></span>
                <h6>Full-Stack Developer</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 bg-warning">
            <div class="d-flex align-items-center">
              <img src="https://ca.slack-edge.com/T1GGQN1RU-U04JLV63G87-d48d59041857-512" alt=""
                class="profile-picture rounded-circle my-3 box-shadow">
              <div class="ps-3 my-3">
                <h4 class="fw-bold">Payton Boone</h4>
                <span><a href="https://www.linkedin.com/in/payton-boone-352661162/" class="mdi mdi-linkedin fs-3 text-dark selectable"></a> <a href="https://github.com/PKILB"
                    class="mdi mdi-github fs-3 text-dark selectable"></a></span>
                <h6>Full-Stack Developer</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 bg-warning">
            <div class="d-flex align-items-center">
              <img src="https://ca.slack-edge.com/T1GGQN1RU-U04JUT9NFSA-4ab8c8becc27-512" alt=""
                class="profile-picture rounded-circle my-3 box-shadow">
              <div class="ps-3 my-3">
                <h4 class="fw-bold">Thomas Peek</h4>
                <span><a href="https://www.linkedin.com/in/thomas-peek-30b562250/" class="mdi mdi-linkedin fs-3 text-dark selectable"></a> <a href="https://github.com/good-ol-peekers"
                    class="mdi mdi-github fs-3 text-dark selectable"></a></span>
                <h6>Full-Stack Developer</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 bg-warning">
            <div class="d-flex align-items-center">
              <img src="https://ca.slack-edge.com/T1GGQN1RU-U04K1FMRQ4A-4b9363798243-512" alt=""
                class="profile-picture rounded-circle my-3 box-shadow">
              <div class="ps-3 my-3">
                <h4 class="fw-bold">Taylor Smith</h4>
                <span><a href="https://www.linkedin.com/in/taylor-smith-3b63405a/" class="mdi mdi-linkedin fs-3 text-dark selectable"></a> <a href="https://github.com/smithtaylord"
                    class="mdi mdi-github fs-3 text-dark selectable"></a></span>
                <h6>Full-Stack Developer</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {

    }
  }
}
</script>
<style scoped lang="scss">
.about-picture {
  height: auto;
  width: 100%;
  object-fit: cover;
}

.profile-picture {
  height: 80px;
  width: 80px;
  object-fit: cover;
}
</style>