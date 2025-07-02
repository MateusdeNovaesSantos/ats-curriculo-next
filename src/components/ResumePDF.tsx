import React from "react"
import { Page, Text, View, Document, StyleSheet, Font, Link } from "@react-pdf/renderer"
import { ResumeInputs } from "@/types"
import { link } from "fs";

type ResumePDFProps = {
    data: ResumeInputs;
}

/* Font.register({
  family: 'Lato',
  fonts: [
    { src: '/fonts/Lato-Regular' },
    { src: '/fonts/Lato-Bold.ttf', fontWeight: 700 },
    { src: '/fonts/Lato-Italic.ttf', fontStyle: 'italic' },
    { src: '/fonts/Lato-BoldItalic.ttf', fontWeight: 700, fontStyle: 'italic' },
  ]
}); */

const styles = StyleSheet.create({
    page: {
        paddingTop: 70,
        paddingBotton: 70,
        paddingHorizontal: 70,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Helvetica',
        lineHeight: 1.005,
    },
    header: {
        textAlign: 'center',
        marginBottom: 20,
    },
    name: {
        fontSize: 18,
        fontFamily: 'Helvetica-Bold',
        lineHeight: 1.4,
    },
    subtitle: {
        fontSize: 12,
        color: 'black',
    },
    defaultText: {
        fontSize: 12,
    },
    section: {
        marginVertical: 10,
    },
    sectionTitle: {
        fontSize: 15,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 3,
        paddingBottom: 2,
    }
})

export const ResumePDF = ({ data }: ResumePDFProps) => (
    <Document author="Mateus de Novaes Santos" title={`Currículo - ${data.nomeCompleto}`}>
        <Page size="A4" style={styles.page}>

            {/* Cabeçalho com dados dinâmicos */}
            <View style={styles.header}>
                <Text style={styles.name}>{data.nomeCompleto?.toUpperCase() || 'NOME COMPLETO'}</Text>
                <Text style={styles.subtitle}>{data.idade ? `${data.idade} anos` : ''}</Text>
                <Text style={styles.subtitle}>{data.endereco ? `${data.endereco}` : ''}</Text>
                <Text style={styles.subtitle}>{data.celular ? `${data.celular}` : ''}</Text>
                <Link style={styles.defaultText} src={data.email}>{data.email ? `${data.email}` : ''}</Link>
                <Link style={styles.defaultText} src={data.linkedin}>{data.linkedin ? `${data.linkedin}` : ''}</Link>
            </View>

            {/* Seção de objetivo */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>OBJETIVO</Text>
                <Text style={styles.defaultText}>{data.cargo || 'Cargo Desejado'}</Text>
            </View>

            {/* Seção de resumo profissional */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>RESUMO PROFISSIONAL</Text>
                <Text style={styles.defaultText}>{data.resumoProfissional || 'Seu resumo profissional...'}</Text>
            </View>
            
        </Page>
    </Document>
)