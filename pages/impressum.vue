<script setup lang="ts">
useSeoMeta({
  title: 'Impressum | Dennis Smuda',
  ogTitle: 'Impressum | Dennis Smuda',
  description: 'Impressum | legally required content.',
  ogDescription: 'Impressum | legally required content.',
})

const {
  data: content,
} = await useAsyncData(() =>
  queryCollection('copy').where('title', '=', 'impressum').first(),
)
</script>

<template>
  <SharedPageTitle
    title="Impressum" subtitle="muss halt"
  />

  <SharedPageContainer prose>
    <ContentRenderer
      v-if="content"
      :value="content"
    />
    <p>
      Dennis Smuda
      <br>
      44809 Bochum | Germany
    </p>
    <p>
      <a href="mailto:smuda.dennis@gmail.com">smuda.dennis@gmail.com</a>
    </p>

    <h2>Journalistisch-redaktionelle Angebote</h2>
    <p>Inhaltlich verantwortlich: Dennis Smuda (Adresse wie oben)</p>

    <h2>Haftungs- und Urheberrechtshinweise</h2>
    <p>
      Haftungsausschluss: Die Inhalte dieses Onlineangebotes wurden sorgfältig
      und nach unserem aktuellen Kenntnisstand erstellt, dienen jedoch nur der
      Information und entfalten keine rechtlich bindende Wirkung, sofern es sich
      nicht um gesetzlich verpflichtende Informationen (z.B. das Impressum, die
      Datenschutzerklärung, AGB oder Widerrufsbelehrungen für Verbraucher)
      handelt. Wir behalten uns vor, die Inhalte vollständig oder teilweise zu
      ändern oder zu löschen, soweit vertragliche Verpflichtungen unberührt
      bleiben. Alle Angebote sind freibleibend und unverbindlich.
    </p>

    <h3>Links auf fremde Webseiten:</h3>
    <p>
      Inhalte fremder Webseiten, auf die wir direkt oder indirekt verweisen,
      liegen außerhalb unseres Verantwortungsbereiches und machen wir uns nicht
      zu Eigen. Für alle Inhalte und insbesondere für Schäden, die aus der
      Nutzung der in den verlinkten Webseiten aufrufbaren Informationen
      entstehen, haftet allein der Anbieter der verlinkten Webseiten.
    </p>
  </SharedPageContainer>
</template>
