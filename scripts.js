// function scrollLeft() {
//     const container = document.querySelector('.vaccine-info-container');
//     container.scrollBy({
//         left: -300, // Adjust this value as needed
//         behavior: 'smooth'
//     });
// }

// function scrollRight() {
//     const container = document.querySelector('.vaccine-info-container');
//     container.scrollBy({
//         left: 300, // Adjust this value as needed
//         behavior: 'smooth'
//     });
// }


<script>
document.addEventListener('DOMContentLoaded', () => {
    // Select all rows
    const rows = document.querySelectorAll('tbody tr');
    // Show the first completed row
    rows.forEach((row, index) => {
        if (index === 0 || index === 1) {
            row.style.display = 'table-row';
        }
    });
});
</script>
