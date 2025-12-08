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

// Handle select-all checkbox for output requests unassigned tab
document.addEventListener('DOMContentLoaded', function() {
  const selectAllCheckbox = document.getElementById('selectAllUnassignedOutput');
  const rowCheckboxes = document.querySelectorAll('input[name="unassignedOutputRequest"]');
  
  if (!selectAllCheckbox) return; // Exit if checkbox not on this page
  
  function updateSelectAllState() {
    const checkedCount = Array.from(rowCheckboxes).filter(cb => cb.checked).length;
    const totalCount = rowCheckboxes.length;
    
    if (checkedCount === 0) {
      selectAllCheckbox.indeterminate = false;
      selectAllCheckbox.checked = false;
    } else if (checkedCount === totalCount) {
      selectAllCheckbox.indeterminate = false;
      selectAllCheckbox.checked = true;
    } else {
      selectAllCheckbox.indeterminate = true;
      selectAllCheckbox.checked = false;
    }
  }
  
  selectAllCheckbox.addEventListener('change', function() {
    rowCheckboxes.forEach(checkbox => {
      checkbox.checked = this.checked;
    });
  });
  
  rowCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateSelectAllState);
  });
  
  updateSelectAllState();
});
