<template>

    <div class="home">
    <header>
        <h1>Customer Management System</h1>
    </header>
    <main>
        <section class="intro">
        
            <p>Developed by: YUSUF ABDULRAHMAN</p>
            <p>Matric No: U20CYS1033</p>
            <p>Course Code: CYB 401</p>
        </section>
    </main>
        
    </div>
    
</template>

<script>
export default {
    name: 'HomeView',
    components: {

    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>

header {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
}

.intro h2 {
    color: #333;
}

.intro p {
    color: #666;
}

main {
    padding: 20px;
}

section.intro {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>