<script>
const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    // Close other open accordions
    document.querySelectorAll(".accordion-content").forEach(item => {
      if (item !== content) item.style.display = "none";
    });

    // Toggle current accordion
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});
</script>
