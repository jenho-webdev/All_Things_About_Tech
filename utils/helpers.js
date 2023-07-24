module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },

  formatArticleContent: (content) => {
    // Split content by paragraphs
    const paragraphs = content.split('\n\n');

    // Map each paragraph to format ordered list lines with <b> tags
    const formattedParagraphs = paragraphs.map((p) => {
      // Check if the paragraph starts with a number (ordered list item)
      if (/^\d+\./.test(p.trim())) {
        // Wrap the line with <b> tags to bold it
        return `<p><b>${p}</b></p>`;
      }
      // Check if the paragraph contains only "Introduction" (case-insensitive)
      else if (/^\s*Introduction\s*$/i.test(p)) {
        // Wrap the line with <b> tags to bold it
        return `<p><b>${p}</b></p>`;
      } else if (/^\s*Conclusion\s*$/i.test(p)) {
        return `<p><b>${p}</b></p>`;
      } else {
        // For everything else, wrap them with <p> tags
        return `<p>${p}</p>`;
      }
    });

    // Join the formatted paragraphs with line breaks and return the result
    return formattedParagraphs.join('\n\n');
  },
};
