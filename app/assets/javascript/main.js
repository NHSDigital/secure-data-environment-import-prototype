// ES6 or Vanilla JavaScript

// Handle visibility of rejection reasons based on decision radio button
document.addEventListener('DOMContentLoaded', function() {
  const decisionRadios = document.querySelectorAll('input[name="decision"]');
  const rejectionReasonsContainer = document.getElementById('rejectionReasonsContainer');
  
  if (!rejectionReasonsContainer) return; // Exit if container not on this page
  
  function toggleRejectionReasons() {
    const selectedValue = Array.from(decisionRadios).find(radio => radio.checked)?.value;
    if (selectedValue === 'rejected') {
      rejectionReasonsContainer.style.display = 'block';
    } else {
      rejectionReasonsContainer.style.display = 'none';
      // Clear rejection reasons when switching away from rejected
      document.querySelectorAll('input[name="rejectionReasons"]').forEach(checkbox => {
        checkbox.checked = false;
      });
      const otherReasonTextarea = document.getElementById('otherReason');
      if (otherReasonTextarea) {
        otherReasonTextarea.value = '';
        const formGroup = otherReasonTextarea.closest('.nhsuk-form-group');
        if (formGroup) {
          formGroup.style.display = 'none';
        }
      }
    }
  }
  
  // Listen for changes to decision radios
  decisionRadios.forEach(radio => {
    radio.addEventListener('change', toggleRejectionReasons);
  });
  
  // Initialize on page load
  toggleRejectionReasons();
});
