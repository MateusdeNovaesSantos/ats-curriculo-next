"use client";

import { PDFViewer } from "@react-pdf/renderer";
import { ResumePDF } from "./ResumePDF";
import { ResumeInputs } from "@/types"

export const ResumePreview = ({ data }: { data: ResumeInputs }) => (
    <PDFViewer style={{ width: "100%", height: "100%" }} >
        <ResumePDF data={data} />
    </PDFViewer>
)