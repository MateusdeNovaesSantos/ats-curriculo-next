import React from "react"
import { Page, Text, View, Document, StyleSheet, Font, Link } from "@react-pdf/renderer"
import { ResumeInputs } from "@/types"

type ResumePDFProps = {
    data: ResumeInputs;
}

const styles = StyleSheet.create({
    page: {
        paddingTop: 35,
        paddingBotton: 65,
        paddingHorizontal: 35,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Arial',
    },
    header: {
        textAlign: 'center',
        marginBottom: 20,
    },
    name: {
        fontSize: 18,
        fontFamily: 'Arial-Bold',
        lineHeight: 1.6,
    },
    subtitle: {
        fontSize: 12,
        color: 'black',
    },
    section: {
        marginVertical: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily: 'Arial-Bold',
        marginBottom: 5,
        paddingBottom: 3,
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
                <Link style={styles.subtitle} src={data.email}>{data.email ? `${data.email}` : ''}</Link>
                <Link style={styles.subtitle} src={data.linkedin}>{data.linkedin ? `${data.linkedin}` : ''}</Link>
            </View>

            {/* Seção de objetivo */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>OBJETIVO</Text>
                <Text>{data.cargo || 'Cargo Desejado'}</Text>
            </View>

            {/* Seção de resumo profissional */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>RESUMO PROFISSIONAL</Text>
                <Text>{data.resumoProfissional || 'Seu resumo profissional...'}</Text>
            </View>
            
        </Page>
    </Document>
)