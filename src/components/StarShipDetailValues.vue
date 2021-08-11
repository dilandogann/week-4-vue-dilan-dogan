<template>
  <div>
    <p><strong>Passengers: </strong> {{ starship.passengers }}</p>
    <p>
      <strong>Max Atmosphering Speed: </strong
      >{{ starship.max_atmosphering_speed }}
    </p>
    <p><strong>Manufacturer:</strong>{{ starship.manufacturer }}</p>
    <p><strong>Crew: </strong>{{ starship.crew }}</p>
    <p><strong>Cargo Capacity: </strong>{{ starship.cargo_capacity }}</p>
  </div>
</template>

<script>
export default {
  name: "DetailCard",
  props: {
    starship: {
      type: Object,
      required: true,
    },
  },
};
</script>
