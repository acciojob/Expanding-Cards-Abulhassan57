//your JS code here. If required.

let panels = document.querySelectorAll(".panel");

panels.forEach(function(panel) {
	
    panel.addEventListener("click", function() {
        // Remove active class from all panels
        panels.forEach(function(p) {
            p.classList.remove("active");
        });
        // Add active class to clicked panel
        panel.classList.add("active");
    });
});
