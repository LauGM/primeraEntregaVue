<template>
    <div>
        <form class="inner-block">
            <h3>Ingresar</h3>
            <div class="form-group">
                <label>Tu email</label>
                <input type="email" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Tu Clave</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
            <div class="derecha">
                <button type="submit" class="btn btn-dark">Ingresar</button>
            </div>
            <p class="forgot-password text-right mt-2 mb-4">
                No estás registrado ?
            </p>
        </form>
    </div>
</template>

<script>
    export default {
        name:'LogIn',
        data() {
            return {}
        }
    }
</script>