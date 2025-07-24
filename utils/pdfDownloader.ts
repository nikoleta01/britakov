export const downloadPDF = async (filename: string, displayName?: string) => {
  try {
    console.log("Attempting to download PDF:", filename);

    const downloadUrl = `/api/download-pdf?filename=${encodeURIComponent(
      filename
    )}`;
    console.log("Download URL:", downloadUrl);

    // Try simple link approach first (more reliable)
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = displayName || filename;
    link.target = "_blank";
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log("PDF download triggered successfully");
  } catch (error) {
    console.error("Error downloading PDF:", error);
    alert(`Error downloading PDF: ${error}`);
  }
};

export const downloadPDFDirect = (publicUrl: string, filename: string) => {
  try {
    const link = document.createElement("a");
    link.href = publicUrl;
    link.download = filename;
    link.target = "_blank";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading PDF:", error);
  }
};
