function skillsMember() {
  return {
    name: 'John Doe',
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    getSkills: function() {
      return this.skills;
    }
  }
}