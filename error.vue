<template>
    <div class="flex flex-column justify-center align-center">
        <v-empty-state
            headline="Whoops, 404"
            title="Pagina no encontrada"
            text="La pagina que estabas buscando no existe"
            image="logoDaptee.svg"
        />

        <v-btn
            to="/users"
            variant="tonal">
            Volver a Usuarios
        </v-btn>
    </div>
</template>